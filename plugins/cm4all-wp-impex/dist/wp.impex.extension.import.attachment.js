var wp = wp || {};
wp.impex = wp.impex || {};
wp.impex.extension = wp.impex.extension || {};
wp.impex.extension.import = wp.impex.extension.import || {};
wp.impex.extension.import.attachment = (() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // plugins/cm4all-wp-impex/src/wp.impex.extension.import.attachment.mjs
  var wp_impex_extension_import_attachment_exports = {};
  __export(wp_impex_extension_import_attachment_exports, {
    default: () => wp_impex_extension_import_attachment_default
  });

  // esbuild-globals-plugin:@wordpress/hooks
  var hooks_default = window.wp.hooks;
  var { actions, addAction, addFilter, applyFilters, createHooks, currentAction, currentFilter, defaultHooks, didAction, didFilter, doAction, doingAction, doingFilter, filters, hasAction, hasFilter, removeAction, removeAllActions, removeAllFilters, removeFilter } = window.wp.hooks;

  // esbuild-globals-plugin:@cm4all-impex/debug
  var debug_default = window.wp.impex.debug;

  // esbuild-globals-plugin:@cm4all-impex/filters
  var filters_default = window.wp.impex.filters;

  // plugins/cm4all-wp-impex/src/wp.impex.extension.import.attachment.mjs
  var debug = debug_default.default("wp.impex.attachments");
  debug("huhu!");
  hooks_default.addFilter(filters_default.SLICE_REST_UPLOAD, filters_default.NAMESPACE, async function(namespace, slice, sliceIndex, chunkDirHandle, formData) {
    if (slice["tag"] === "attachment" && slice["meta"]["entity"] === "attachment" && slice["type"] === "resource") {
      const localAttachmentFilename = `slice-${sliceIndex.toString().padStart(4, "0")}-` + slice["data"].split(/[\\/]/).pop();
      const localAttachmentFileHandle = await chunkDirHandle.getFileHandle(localAttachmentFilename).catch((e) => {
        console.log(localAttachmentFilename);
        return Promise.reject(e);
      });
      formData.append(wp.impex.extension.import.attachment.WP_FILTER_IMPORT_REST_SLICE_UPLOAD_FILE, await localAttachmentFileHandle.getFile());
    }
    return slice;
  });
  var wp_impex_extension_import_attachment_default = {};
  return wp_impex_extension_import_attachment_exports;
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3dwLmltcGV4LmV4dGVuc2lvbi5pbXBvcnQuYXR0YWNobWVudC5tanMiLCAiZXNidWlsZC1nbG9iYWxzLXBsdWdpbjpAd29yZHByZXNzL2hvb2tzIiwgImVzYnVpbGQtZ2xvYmFscy1wbHVnaW46QGNtNGFsbC1pbXBleC9kZWJ1ZyIsICJlc2J1aWxkLWdsb2JhbHMtcGx1Z2luOkBjbTRhbGwtaW1wZXgvZmlsdGVycyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGhvb2tzIGZyb20gXCJAd29yZHByZXNzL2hvb2tzXCI7XG5pbXBvcnQgRGVidWcgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZGVidWdcIjtcbmltcG9ydCBJbXBleEZpbHRlcnMgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZmlsdGVyc1wiO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnLmRlZmF1bHQoXCJ3cC5pbXBleC5hdHRhY2htZW50c1wiKTtcbmRlYnVnKFwiaHVodSFcIik7XG5cbmhvb2tzLmFkZEZpbHRlcihcbiAgSW1wZXhGaWx0ZXJzLlNMSUNFX1JFU1RfVVBMT0FELFxuICBJbXBleEZpbHRlcnMuTkFNRVNQQUNFLFxuICBhc3luYyBmdW5jdGlvbiAobmFtZXNwYWNlLCBzbGljZSwgc2xpY2VJbmRleCwgY2h1bmtEaXJIYW5kbGUsIGZvcm1EYXRhKSB7XG4gICAgaWYgKFxuICAgICAgc2xpY2VbXCJ0YWdcIl0gPT09IFwiYXR0YWNobWVudFwiICYmXG4gICAgICBzbGljZVtcIm1ldGFcIl1bXCJlbnRpdHlcIl0gPT09IFwiYXR0YWNobWVudFwiICYmXG4gICAgICBzbGljZVtcInR5cGVcIl0gPT09IFwicmVzb3VyY2VcIlxuICAgICkge1xuICAgICAgY29uc3QgbG9jYWxBdHRhY2htZW50RmlsZW5hbWUgPVxuICAgICAgICBgc2xpY2UtJHtzbGljZUluZGV4LnRvU3RyaW5nKCkucGFkU3RhcnQoNCwgXCIwXCIpfS1gICtcbiAgICAgICAgc2xpY2VbXCJkYXRhXCJdLnNwbGl0KC9bXFxcXC9dLykucG9wKCk7XG5cbiAgICAgIGNvbnN0IGxvY2FsQXR0YWNobWVudEZpbGVIYW5kbGUgPSBhd2FpdCBjaHVua0RpckhhbmRsZVxuICAgICAgICAuZ2V0RmlsZUhhbmRsZShsb2NhbEF0dGFjaG1lbnRGaWxlbmFtZSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cobG9jYWxBdHRhY2htZW50RmlsZW5hbWUpO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgLy8gY29uc3RhbnQgd2FzIGluamVjdGVkIHVzaW5nIFxcd3BfYWRkX2lubGluZV9zY3JpcHRcbiAgICAgICAgd3AuaW1wZXguZXh0ZW5zaW9uLmltcG9ydC5hdHRhY2htZW50XG4gICAgICAgICAgLldQX0ZJTFRFUl9JTVBPUlRfUkVTVF9TTElDRV9VUExPQURfRklMRSxcbiAgICAgICAgYXdhaXQgbG9jYWxBdHRhY2htZW50RmlsZUhhbmRsZS5nZXRGaWxlKCksXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzbGljZTtcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuIiwgImV4cG9ydCBkZWZhdWx0IHdpbmRvdy53cC5ob29rcztcbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMsIGFkZEFjdGlvbiwgYWRkRmlsdGVyLCBhcHBseUZpbHRlcnMsIGNyZWF0ZUhvb2tzLCBjdXJyZW50QWN0aW9uLCBjdXJyZW50RmlsdGVyLCBkZWZhdWx0SG9va3MsIGRpZEFjdGlvbiwgZGlkRmlsdGVyLCBkb0FjdGlvbiwgZG9pbmdBY3Rpb24sIGRvaW5nRmlsdGVyLCBmaWx0ZXJzLCBoYXNBY3Rpb24sIGhhc0ZpbHRlciwgcmVtb3ZlQWN0aW9uLCByZW1vdmVBbGxBY3Rpb25zLCByZW1vdmVBbGxGaWx0ZXJzLCByZW1vdmVGaWx0ZXIgfSA9IHdpbmRvdy53cC5ob29rczsiLCAiZXhwb3J0IGRlZmF1bHQgd2luZG93LndwLmltcGV4LmRlYnVnOyIsICJleHBvcnQgZGVmYXVsdCB3aW5kb3cud3AuaW1wZXguZmlsdGVyczsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxNQUFPLGdCQUFRLE9BQU8sR0FBRztBQUNsQixNQUFNLEVBQUUsU0FBUyxXQUFXLFdBQVcsY0FBYyxhQUFhLGVBQWUsZUFBZSxjQUFjLFdBQVcsV0FBVyxVQUFVLGFBQWEsYUFBYSxTQUFTLFdBQVcsV0FBVyxjQUFjLGtCQUFrQixrQkFBa0IsaUJBQWlCLE9BQU8sR0FBRzs7O0FDRDNSLE1BQU8sZ0JBQVEsT0FBTyxHQUFHLE1BQU07OztBQ0EvQixNQUFPLGtCQUFRLE9BQU8sR0FBRyxNQUFNOzs7QUhJL0IsTUFBTSxRQUFRLGNBQU0sUUFBUTtBQUM1QixRQUFNO0FBRU4sZ0JBQU0sVUFDSixnQkFBYSxtQkFDYixnQkFBYSxXQUNiLGVBQWdCLFdBQVcsT0FBTyxZQUFZLGdCQUFnQixVQUFVO0FBQ3RFLFFBQ0UsTUFBTSxXQUFXLGdCQUNqQixNQUFNLFFBQVEsY0FBYyxnQkFDNUIsTUFBTSxZQUFZLFlBQ2xCO0FBQ0EsWUFBTSwwQkFDSixTQUFTLFdBQVcsV0FBVyxTQUFTLEdBQUcsVUFDM0MsTUFBTSxRQUFRLE1BQU0sU0FBUztBQUUvQixZQUFNLDRCQUE0QixNQUFNLGVBQ3JDLGNBQWMseUJBQ2QsTUFBTSxDQUFDLE1BQU07QUFDWixnQkFBUSxJQUFJO0FBQ1osZUFBTyxRQUFRLE9BQU87QUFBQTtBQUcxQixlQUFTLE9BRVAsR0FBRyxNQUFNLFVBQVUsT0FBTyxXQUN2Qix5Q0FDSCxNQUFNLDBCQUEwQjtBQUFBO0FBSXBDLFdBQU87QUFBQTtBQUlYLE1BQU8sK0NBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
