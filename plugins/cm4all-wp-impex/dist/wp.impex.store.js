var wp = wp || {};
wp.impex = wp.impex || {};
wp.impex.store = (() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // plugins/cm4all-wp-impex/src/wp.impex.store.mjs
  var wp_impex_store_exports = {};
  __export(wp_impex_store_exports, {
    KEY: () => KEY,
    default: () => wp_impex_store_default
  });

  // esbuild-globals-plugin:@wordpress/data
  var data_default = window.wp.data;

  // esbuild-globals-plugin:@wordpress/api-fetch
  var api_fetch_default = window.wp.apiFetch;

  // esbuild-globals-plugin:@wordpress/url
  var url_default = window.wp.url;

  // esbuild-globals-plugin:@cm4all-impex/debug
  var debug_default = window.wp.impex.debug;

  // plugins/cm4all-wp-impex/src/wp.impex.store.mjs
  var debug = debug_default.default("wp.impex.store");
  debug("loaded");
  var KEY = `cm4all/impex`;
  async function wp_impex_store_default(settings) {
    const { namespace, base_uri, site_url } = settings;
    const DEFAULT_STATE = {
      settings,
      imports: [],
      exports: [],
      importProfiles: [],
      exportProfiles: []
    };
    const discovery = await api_fetch_default({
      path: "/"
    });
    if (!discovery.namespaces.includes(namespace)) {
      throw `rest discovery doesnt provide expected impex rest namespace(=${namespace})`;
    }
    if (!discovery.routes[base_uri]) {
      throw `rest discovery doesnt provide expected impex rest route (=${base_uri})`;
    }
    const actions = {
      async createExport(exportProfile, name = "", description = "") {
        const payload = await api_fetch_default({
          path: `${settings.base_uri}/export`,
          method: "POST",
          data: { profile: exportProfile.name, name, description }
        });
        return {
          type: "ADD_EXPORT",
          payload
        };
      },
      setExports(exports) {
        return {
          type: "SET_EXPORTS",
          payload: exports
        };
      },
      async updateExport(id, data) {
        const updatedExport = await api_fetch_default({
          path: `${DEFAULT_STATE.settings.base_uri}/export/${id}`,
          method: "PATCH",
          data
        });
        return {
          type: "UPDATE_EXPORT",
          payload: updatedExport
        };
      },
      async deleteExport(id) {
        const deletedExport = await api_fetch_default({
          path: `${settings.base_uri}/export/${id}`,
          method: "DELETE"
        });
        return {
          type: "DELETE_EXPORT",
          payload: id
        };
      },
      async createImport(name, description, importProfile, options) {
        const payload = await api_fetch_default({
          path: `${settings.base_uri}/import`,
          method: "POST",
          data: { name, description, profile: importProfile.name, options }
        });
        return {
          type: "ADD_IMPORT",
          payload
        };
      },
      async consumeImport(id, options = [], offset = null, limit = null) {
        const queryArgs = {};
        if (offset !== null) {
          queryArgs["offset"] = offset;
        }
        if (limit !== null) {
          queryArgs["limit"] = limit;
        }
        const payload = await api_fetch_default({
          path: url_default.addQueryArgs(`${settings.base_uri}/import/${id}/consume`, queryArgs),
          method: "POST",
          data: options
        });
        return {
          type: ""
        };
      },
      setImports(exports) {
        return {
          type: "SET_IMPORTS",
          payload: exports
        };
      },
      async updateImport(id, data) {
        const updatedImport = await api_fetch_default({
          path: `${DEFAULT_STATE.settings.base_uri}/import/${id}`,
          method: "PATCH",
          data
        });
        return {
          type: "UPDATE_IMPORT",
          payload: updatedImport
        };
      },
      async deleteImport(id) {
        const deletedImport = await api_fetch_default({
          path: `${settings.base_uri}/import/${id}`,
          method: "DELETE"
        });
        return {
          type: "DELETE_IMPORT",
          payload: id
        };
      }
    };
    const selectors = {
      getExportProfile(state, name) {
        return state.exportProfiles.find((_) => _.name === name);
      },
      getExportProfiles(state) {
        return state.exportProfiles;
      },
      getExport(state, id) {
        return state.exports.find((_) => _.id === id);
      },
      getExports(state) {
        return state.exports;
      },
      getImportProfile(state, name) {
        return state.importProfiles.find((_) => _.name === name);
      },
      getImportProfiles(state) {
        return state.importProfiles;
      },
      getImport(state, id) {
        return state.imports.find((_) => _.id === id);
      },
      getImports(state) {
        return state.imports;
      },
      getSettings(state) {
        return state.settings;
      }
    };
    const store = {
      reducer(state = DEFAULT_STATE, { type, payload }) {
        switch (type) {
          case "ADD_EXPORT": {
            return {
              ...state,
              exports: [payload, ...state.exports]
            };
          }
          case "UPDATE_EXPORT": {
            const indexOfExport = state.exports.findIndex((_) => _.id === payload.id);
            if (indexOfExport === -1) {
              debug("Export(id=%s) is unknown", payload.id);
            }
            state.exports.splice(indexOfExport, 1, payload);
            return {
              ...state,
              exports: [...state.exports]
            };
          }
          case "DELETE_EXPORT": {
            const indexOfExport = state.exports.findIndex((_) => _.id === payload);
            if (indexOfExport === -1) {
              debug("Export(id=%s) is unknown", payload);
            }
            state.exports.splice(indexOfExport, 1);
            return {
              ...state,
              exports: [...state.exports]
            };
          }
          case "SET_EXPORTS": {
            return {
              ...state,
              exports: [...payload]
            };
          }
          case "SET_EXPORTPROFILES": {
            return {
              ...state,
              exportProfiles: [...payload].sort((l, r) => l.name.localeCompare(r.name))
            };
          }
          case "ADD_IMPORT": {
            return {
              ...state,
              imports: [payload, ...state.imports]
            };
          }
          case "UPDATE_IMPORT": {
            const indexOfExport = state.imports.findIndex((_) => _.id === payload.id);
            if (indexOfExport === -1) {
              debug("Export(id=%s) is unknown", payload.id);
            }
            state.imports.splice(indexOfExport, 1, payload);
            return {
              ...state,
              imports: [...state.imports]
            };
          }
          case "DELETE_IMPORT": {
            const indexOfExport = state.imports.findIndex((_) => _.id === payload);
            if (indexOfExport === -1) {
              debug("Export(id=%s) is unknown", payload);
            }
            state.imports.splice(indexOfExport, 1);
            return {
              ...state,
              imports: [...state.imports]
            };
          }
          case "SET_IMPORTS": {
            return {
              ...state,
              imports: [...payload]
            };
          }
          case "SET_IMPORTPROFILES": {
            return {
              ...state,
              importProfiles: [...payload].sort((l, r) => l.name.localeCompare(r.name))
            };
          }
        }
        return state;
      },
      actions,
      selectors,
      resolvers: {
        async getExportProfiles() {
          const payload = await api_fetch_default({
            path: `${base_uri}/export/profile`
          });
          return {
            type: "SET_EXPORTPROFILES",
            payload
          };
        },
        async getExports() {
          const payload = await api_fetch_default({
            path: `${base_uri}/export`
          });
          return {
            type: "SET_EXPORTS",
            payload
          };
        },
        async getImportProfiles() {
          const payload = await api_fetch_default({
            path: `${base_uri}/import/profile`
          });
          return {
            type: "SET_IMPORTPROFILES",
            payload
          };
        },
        async getImports() {
          const payload = await api_fetch_default({
            path: `${base_uri}/import`
          });
          return {
            type: "SET_IMPORTS",
            payload
          };
        }
      }
    };
    data_default.registerStore(KEY, store);
  }
  return wp_impex_store_exports;
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3dwLmltcGV4LnN0b3JlLm1qcyIsICJlc2J1aWxkLWdsb2JhbHMtcGx1Z2luOkB3b3JkcHJlc3MvZGF0YSIsICJlc2J1aWxkLWdsb2JhbHMtcGx1Z2luOkB3b3JkcHJlc3MvYXBpLWZldGNoIiwgImVzYnVpbGQtZ2xvYmFscy1wbHVnaW46QHdvcmRwcmVzcy91cmwiLCAiZXNidWlsZC1nbG9iYWxzLXBsdWdpbjpAY200YWxsLWltcGV4L2RlYnVnIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgZGF0YSBmcm9tIFwiQHdvcmRwcmVzcy9kYXRhXCI7XG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSBcIkB3b3JkcHJlc3MvYXBpLWZldGNoXCI7XG5pbXBvcnQgdXJsIGZyb20gXCJAd29yZHByZXNzL3VybFwiO1xuaW1wb3J0IERlYnVnIGZyb20gXCJAY200YWxsLWltcGV4L2RlYnVnXCI7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcuZGVmYXVsdChcIndwLmltcGV4LnN0b3JlXCIpO1xuZGVidWcoXCJsb2FkZWRcIik7XG5cbmNvbnN0IEtFWSA9IGBjbTRhbGwvaW1wZXhgO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAoc2V0dGluZ3MpIHtcbiAgY29uc3QgeyBuYW1lc3BhY2UsIGJhc2VfdXJpLCBzaXRlX3VybCB9ID0gc2V0dGluZ3M7XG5cbiAgY29uc3QgREVGQVVMVF9TVEFURSA9IHtcbiAgICBzZXR0aW5ncyxcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBleHBvcnRzOiBbXSxcbiAgICBpbXBvcnRQcm9maWxlczogW10sXG4gICAgZXhwb3J0UHJvZmlsZXM6IFtdLFxuICB9O1xuXG4gIGNvbnN0IGRpc2NvdmVyeSA9IGF3YWl0IGFwaUZldGNoKHtcbiAgICBwYXRoOiBcIi9cIixcbiAgfSk7XG5cbiAgaWYgKCFkaXNjb3ZlcnkubmFtZXNwYWNlcy5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgdGhyb3cgYHJlc3QgZGlzY292ZXJ5IGRvZXNudCBwcm92aWRlIGV4cGVjdGVkIGltcGV4IHJlc3QgbmFtZXNwYWNlKD0ke25hbWVzcGFjZX0pYDtcbiAgfVxuXG4gIGlmICghZGlzY292ZXJ5LnJvdXRlc1tiYXNlX3VyaV0pIHtcbiAgICB0aHJvdyBgcmVzdCBkaXNjb3ZlcnkgZG9lc250IHByb3ZpZGUgZXhwZWN0ZWQgaW1wZXggcmVzdCByb3V0ZSAoPSR7YmFzZV91cml9KWA7XG4gIH1cblxuICBjb25zdCBhY3Rpb25zID0ge1xuICAgIGFzeW5jIGNyZWF0ZUV4cG9ydChleHBvcnRQcm9maWxlLCBuYW1lID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiKSB7XG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgYXBpRmV0Y2goe1xuICAgICAgICBwYXRoOiBgJHtzZXR0aW5ncy5iYXNlX3VyaX0vZXhwb3J0YCxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgZGF0YTogeyBwcm9maWxlOiBleHBvcnRQcm9maWxlLm5hbWUsIG5hbWUsIGRlc2NyaXB0aW9uIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJBRERfRVhQT1JUXCIsXG4gICAgICAgIHBheWxvYWQsXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0RXhwb3J0cyhleHBvcnRzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIlNFVF9FWFBPUlRTXCIsXG4gICAgICAgIHBheWxvYWQ6IGV4cG9ydHMsXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXN5bmMgdXBkYXRlRXhwb3J0KGlkLCBkYXRhKSB7XG4gICAgICBjb25zdCB1cGRhdGVkRXhwb3J0ID0gYXdhaXQgYXBpRmV0Y2goe1xuICAgICAgICBwYXRoOiBgJHtERUZBVUxUX1NUQVRFLnNldHRpbmdzLmJhc2VfdXJpfS9leHBvcnQvJHtpZH1gLFxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgZGF0YSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIlVQREFURV9FWFBPUlRcIixcbiAgICAgICAgcGF5bG9hZDogdXBkYXRlZEV4cG9ydCxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhc3luYyBkZWxldGVFeHBvcnQoaWQpIHtcbiAgICAgIGNvbnN0IGRlbGV0ZWRFeHBvcnQgPSBhd2FpdCBhcGlGZXRjaCh7XG4gICAgICAgIHBhdGg6IGAke3NldHRpbmdzLmJhc2VfdXJpfS9leHBvcnQvJHtpZH1gLFxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJERUxFVEVfRVhQT1JUXCIsXG4gICAgICAgIHBheWxvYWQ6IGlkLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGFzeW5jIGNyZWF0ZUltcG9ydChuYW1lLCBkZXNjcmlwdGlvbiwgaW1wb3J0UHJvZmlsZSwgb3B0aW9ucykge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGFwaUZldGNoKHtcbiAgICAgICAgcGF0aDogYCR7c2V0dGluZ3MuYmFzZV91cml9L2ltcG9ydGAsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGRhdGE6IHsgbmFtZSwgZGVzY3JpcHRpb24sIHByb2ZpbGU6IGltcG9ydFByb2ZpbGUubmFtZSwgb3B0aW9ucyB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiQUREX0lNUE9SVFwiLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGFzeW5jIGNvbnN1bWVJbXBvcnQoaWQsIG9wdGlvbnMgPSBbXSwgb2Zmc2V0ID0gbnVsbCwgbGltaXQgPSBudWxsKSB7XG4gICAgICBjb25zdCBxdWVyeUFyZ3MgPSB7fTtcblxuICAgICAgaWYgKG9mZnNldCAhPT0gbnVsbCkge1xuICAgICAgICBxdWVyeUFyZ3NbXCJvZmZzZXRcIl0gPSBvZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaW1pdCAhPT0gbnVsbCkge1xuICAgICAgICBxdWVyeUFyZ3NbXCJsaW1pdFwiXSA9IGxpbWl0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgYXBpRmV0Y2goe1xuICAgICAgICBwYXRoOiB1cmwuYWRkUXVlcnlBcmdzKFxuICAgICAgICAgIGAke3NldHRpbmdzLmJhc2VfdXJpfS9pbXBvcnQvJHtpZH0vY29uc3VtZWAsXG4gICAgICAgICAgcXVlcnlBcmdzXG4gICAgICAgICksXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGRhdGE6IG9wdGlvbnMsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJcIixcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXRJbXBvcnRzKGV4cG9ydHMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiU0VUX0lNUE9SVFNcIixcbiAgICAgICAgcGF5bG9hZDogZXhwb3J0cyxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhc3luYyB1cGRhdGVJbXBvcnQoaWQsIGRhdGEpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRJbXBvcnQgPSBhd2FpdCBhcGlGZXRjaCh7XG4gICAgICAgIHBhdGg6IGAke0RFRkFVTFRfU1RBVEUuc2V0dGluZ3MuYmFzZV91cml9L2ltcG9ydC8ke2lkfWAsXG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICBkYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiVVBEQVRFX0lNUE9SVFwiLFxuICAgICAgICBwYXlsb2FkOiB1cGRhdGVkSW1wb3J0LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGFzeW5jIGRlbGV0ZUltcG9ydChpZCkge1xuICAgICAgY29uc3QgZGVsZXRlZEltcG9ydCA9IGF3YWl0IGFwaUZldGNoKHtcbiAgICAgICAgcGF0aDogYCR7c2V0dGluZ3MuYmFzZV91cml9L2ltcG9ydC8ke2lkfWAsXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIkRFTEVURV9JTVBPUlRcIixcbiAgICAgICAgcGF5bG9hZDogaWQsXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgIGdldEV4cG9ydFByb2ZpbGUoc3RhdGUsIG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5leHBvcnRQcm9maWxlcy5maW5kKChfKSA9PiBfLm5hbWUgPT09IG5hbWUpO1xuICAgIH0sXG5cbiAgICBnZXRFeHBvcnRQcm9maWxlcyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmV4cG9ydFByb2ZpbGVzO1xuICAgIH0sXG5cbiAgICBnZXRFeHBvcnQoc3RhdGUsIGlkKSB7XG4gICAgICByZXR1cm4gc3RhdGUuZXhwb3J0cy5maW5kKChfKSA9PiBfLmlkID09PSBpZCk7XG4gICAgfSxcblxuICAgIGdldEV4cG9ydHMoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5leHBvcnRzO1xuICAgIH0sXG5cbiAgICBnZXRJbXBvcnRQcm9maWxlKHN0YXRlLCBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGUuaW1wb3J0UHJvZmlsZXMuZmluZCgoXykgPT4gXy5uYW1lID09PSBuYW1lKTtcbiAgICB9LFxuXG4gICAgZ2V0SW1wb3J0UHJvZmlsZXMoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5pbXBvcnRQcm9maWxlcztcbiAgICB9LFxuXG4gICAgZ2V0SW1wb3J0KHN0YXRlLCBpZCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmltcG9ydHMuZmluZCgoXykgPT4gXy5pZCA9PT0gaWQpO1xuICAgIH0sXG5cbiAgICBnZXRJbXBvcnRzKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuaW1wb3J0cztcbiAgICB9LFxuXG4gICAgZ2V0U2V0dGluZ3Moc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5zZXR0aW5ncztcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHN0b3JlID0ge1xuICAgIHJlZHVjZXIoc3RhdGUgPSBERUZBVUxUX1NUQVRFLCB7IHR5cGUsIHBheWxvYWQgfSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJBRERfRVhQT1JUXCI6IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBleHBvcnRzOiBbcGF5bG9hZCwgLi4uc3RhdGUuZXhwb3J0c10sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiVVBEQVRFX0VYUE9SVFwiOiB7XG4gICAgICAgICAgY29uc3QgaW5kZXhPZkV4cG9ydCA9IHN0YXRlLmV4cG9ydHMuZmluZEluZGV4KFxuICAgICAgICAgICAgKF8pID0+IF8uaWQgPT09IHBheWxvYWQuaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChpbmRleE9mRXhwb3J0ID09PSAtMSkge1xuICAgICAgICAgICAgZGVidWcoXCJFeHBvcnQoaWQ9JXMpIGlzIHVua25vd25cIiwgcGF5bG9hZC5pZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhdGUuZXhwb3J0cy5zcGxpY2UoaW5kZXhPZkV4cG9ydCwgMSwgcGF5bG9hZCk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBleHBvcnRzOiBbLi4uc3RhdGUuZXhwb3J0c10sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiREVMRVRFX0VYUE9SVFwiOiB7XG4gICAgICAgICAgY29uc3QgaW5kZXhPZkV4cG9ydCA9IHN0YXRlLmV4cG9ydHMuZmluZEluZGV4KFxuICAgICAgICAgICAgKF8pID0+IF8uaWQgPT09IHBheWxvYWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChpbmRleE9mRXhwb3J0ID09PSAtMSkge1xuICAgICAgICAgICAgZGVidWcoXCJFeHBvcnQoaWQ9JXMpIGlzIHVua25vd25cIiwgcGF5bG9hZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhdGUuZXhwb3J0cy5zcGxpY2UoaW5kZXhPZkV4cG9ydCwgMSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBleHBvcnRzOiBbLi4uc3RhdGUuZXhwb3J0c10sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiU0VUX0VYUE9SVFNcIjoge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGV4cG9ydHM6IFsuLi5wYXlsb2FkXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJTRVRfRVhQT1JUUFJPRklMRVNcIjoge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGV4cG9ydFByb2ZpbGVzOiBbLi4ucGF5bG9hZF0uc29ydCgobCwgcikgPT5cbiAgICAgICAgICAgICAgbC5uYW1lLmxvY2FsZUNvbXBhcmUoci5uYW1lKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBcIkFERF9JTVBPUlRcIjoge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGltcG9ydHM6IFtwYXlsb2FkLCAuLi5zdGF0ZS5pbXBvcnRzXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJVUERBVEVfSU1QT1JUXCI6IHtcbiAgICAgICAgICBjb25zdCBpbmRleE9mRXhwb3J0ID0gc3RhdGUuaW1wb3J0cy5maW5kSW5kZXgoXG4gICAgICAgICAgICAoXykgPT4gXy5pZCA9PT0gcGF5bG9hZC5pZFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGluZGV4T2ZFeHBvcnQgPT09IC0xKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIkV4cG9ydChpZD0lcykgaXMgdW5rbm93blwiLCBwYXlsb2FkLmlkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGF0ZS5pbXBvcnRzLnNwbGljZShpbmRleE9mRXhwb3J0LCAxLCBwYXlsb2FkKTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGltcG9ydHM6IFsuLi5zdGF0ZS5pbXBvcnRzXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJERUxFVEVfSU1QT1JUXCI6IHtcbiAgICAgICAgICBjb25zdCBpbmRleE9mRXhwb3J0ID0gc3RhdGUuaW1wb3J0cy5maW5kSW5kZXgoXG4gICAgICAgICAgICAoXykgPT4gXy5pZCA9PT0gcGF5bG9hZFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGluZGV4T2ZFeHBvcnQgPT09IC0xKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIkV4cG9ydChpZD0lcykgaXMgdW5rbm93blwiLCBwYXlsb2FkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGF0ZS5pbXBvcnRzLnNwbGljZShpbmRleE9mRXhwb3J0LCAxKTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGltcG9ydHM6IFsuLi5zdGF0ZS5pbXBvcnRzXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJTRVRfSU1QT1JUU1wiOiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaW1wb3J0czogWy4uLnBheWxvYWRdLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIlNFVF9JTVBPUlRQUk9GSUxFU1wiOiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaW1wb3J0UHJvZmlsZXM6IFsuLi5wYXlsb2FkXS5zb3J0KChsLCByKSA9PlxuICAgICAgICAgICAgICBsLm5hbWUubG9jYWxlQ29tcGFyZShyLm5hbWUpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG4gICAgYWN0aW9ucyxcbiAgICBzZWxlY3RvcnMsXG4gICAgcmVzb2x2ZXJzOiB7XG4gICAgICBhc3luYyBnZXRFeHBvcnRQcm9maWxlcygpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGFwaUZldGNoKHtcbiAgICAgICAgICBwYXRoOiBgJHtiYXNlX3VyaX0vZXhwb3J0L3Byb2ZpbGVgLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBcIlNFVF9FWFBPUlRQUk9GSUxFU1wiLFxuICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgYXN5bmMgZ2V0RXhwb3J0cygpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGFwaUZldGNoKHtcbiAgICAgICAgICBwYXRoOiBgJHtiYXNlX3VyaX0vZXhwb3J0YCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogXCJTRVRfRVhQT1JUU1wiLFxuICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgYXN5bmMgZ2V0SW1wb3J0UHJvZmlsZXMoKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBhcGlGZXRjaCh7XG4gICAgICAgICAgcGF0aDogYCR7YmFzZV91cml9L2ltcG9ydC9wcm9maWxlYCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogXCJTRVRfSU1QT1JUUFJPRklMRVNcIixcbiAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGdldEltcG9ydHMoKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBhcGlGZXRjaCh7XG4gICAgICAgICAgcGF0aDogYCR7YmFzZV91cml9L2ltcG9ydGAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IFwiU0VUX0lNUE9SVFNcIixcbiAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIGRhdGEucmVnaXN0ZXJTdG9yZShLRVksIHN0b3JlKTtcbn1cblxuZXhwb3J0IHsgS0VZIH07XG4iLCAiZXhwb3J0IGRlZmF1bHQgd2luZG93LndwLmRhdGE7IiwgImV4cG9ydCBkZWZhdWx0IHdpbmRvdy53cC5hcGlGZXRjaDsiLCAiZXhwb3J0IGRlZmF1bHQgd2luZG93LndwLnVybDsiLCAiZXhwb3J0IGRlZmF1bHQgd2luZG93LndwLmltcGV4LmRlYnVnOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLE1BQU8sZUFBUSxPQUFPLEdBQUc7OztBQ0F6QixNQUFPLG9CQUFRLE9BQU8sR0FBRzs7O0FDQXpCLE1BQU8sY0FBUSxPQUFPLEdBQUc7OztBQ0F6QixNQUFPLGdCQUFRLE9BQU8sR0FBRyxNQUFNOzs7QUpLL0IsTUFBTSxRQUFRLGNBQU0sUUFBUTtBQUM1QixRQUFNO0FBRU4sTUFBTSxNQUFNO0FBRVosd0NBQStCLFVBQVU7QUFDdkMsVUFBTSxFQUFFLFdBQVcsVUFBVSxhQUFhO0FBRTFDLFVBQU0sZ0JBQWdCO0FBQUEsTUFDcEI7QUFBQSxNQUNBLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULGdCQUFnQjtBQUFBLE1BQ2hCLGdCQUFnQjtBQUFBO0FBR2xCLFVBQU0sWUFBWSxNQUFNLGtC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
