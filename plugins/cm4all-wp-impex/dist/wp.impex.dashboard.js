var wp = wp || {};
wp.impex = wp.impex || {};
wp.impex.dashboard = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          var classes = [];
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!arg)
              continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") {
              classes.push(arg);
            } else if (Array.isArray(arg)) {
              if (arg.length) {
                var inner = classNames.apply(null, arg);
                if (inner) {
                  classes.push(inner);
                }
              }
            } else if (argType === "object") {
              if (arg.toString === Object.prototype.toString) {
                for (var key in arg) {
                  if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                  }
                }
              } else {
                classes.push(arg.toString());
              }
            }
          }
          return classes.join(" ");
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames.default = classNames;
          module.exports = classNames;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames;
          });
        } else {
          window.classNames = classNames;
        }
      })();
    }
  });

  // esbuild-globals-plugin:@wordpress/element
  var element_default = window.wp.element;
  var { Platform, RawHTML, createInterpolateElement, renderToString, Children, Component, Fragment, StrictMode, Suspense, cloneElement, concatChildren, createContext, createElement, createRef, forwardRef, isValidElement, lazy, memo, switchChildrenNodeName, useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState, createPortal, findDOMNode, render, unmountComponentAtNode, isEmptyElement } = window.wp.element;

  // esbuild-globals-plugin:@cm4all-impex/debug
  var debug_default = window.wp.impex.debug;

  // esbuild-globals-plugin:@wordpress/components
  var components_default = window.wp.components;

  // esbuild-globals-plugin:@wordpress/i18n
  var i18n_default = window.wp.i18n;
  var { __, _n, _nx, _x, defaultI18n, getLocaleData, hasTranslation, isRTL, resetLocaleData, setLocaleData, sprintf, subscribe, createI18n } = window.wp.i18n;

  // esbuild-globals-plugin:@wordpress/api-fetch
  var api_fetch_default = window.wp.apiFetch;

  // esbuild-globals-plugin:@wordpress/hooks
  var hooks_default = window.wp.hooks;
  var { actions, addAction, addFilter, applyFilters, createHooks, currentAction, currentFilter, defaultHooks, didAction, didFilter, doAction, doingAction, doingFilter, filters, hasAction, hasFilter, removeAction, removeAllActions, removeAllFilters, removeFilter } = window.wp.hooks;

  // esbuild-globals-plugin:@wordpress/url
  var url_default = window.wp.url;

  // esbuild-globals-plugin:@wordpress/data
  var data_default = window.wp.data;

  // esbuild-globals-plugin:@cm4all-impex/filters
  var filters_default = window.wp.impex.filters;

  // node_modules/@wordpress/primitives/build-module/svg/index.js
  var import_classnames = __toModule(require_classnames());
  var Path = (props) => createElement("path", props);
  var SVG = (_ref) => {
    let {
      className,
      isPressed,
      ...props
    } = _ref;
    const appliedProps = {
      ...props,
      className: (0, import_classnames.default)(className, {
        "is-pressed": isPressed
      }) || void 0,
      role: "img",
      "aria-hidden": true,
      focusable: false
    };
    return createElement("svg", appliedProps);
  };

  // node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js
  var cancelCircleFilled = createElement(SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, createElement(Path, {
    d: "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L13.0607 12L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L12 13.0607L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L10.9393 12L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L12 10.9393L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
  }));
  var cancel_circle_filled_default = cancelCircleFilled;

  // node_modules/@wordpress/icons/build-module/library/cloud-upload.js
  var cloudUpload = createElement(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, createElement(Path, {
    d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-4v-2.4L14 14l1-1-3-3-3 3 1 1 1.2-1.2v2.4H7.7c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4H9l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8 0 1-.8 1.8-1.7 1.8z"
  }));
  var cloud_upload_default = cloudUpload;

  // node_modules/@wordpress/icons/build-module/library/download.js
  var download = createElement(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, createElement(Path, {
    d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"
  }));
  var download_default = download;

  // node_modules/@wordpress/icons/build-module/library/pencil.js
  var pencil = createElement(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, createElement(Path, {
    d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
  }));
  var pencil_default = pencil;

  // node_modules/@wordpress/icons/build-module/library/edit.js
  var edit_default = pencil_default;

  // node_modules/@wordpress/icons/build-module/library/upload.js
  var upload = createElement(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, createElement(Path, {
    d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
  }));
  var upload_default = upload;

  // plugins/cm4all-wp-impex/src/components/rename-modal.mjs
  function RenameModal({ title, doSave, item, onRequestClose }) {
    const [name, setName] = element_default.useState(item.name);
    const [description, setDescription] = element_default.useState(item.description);
    const onSave = async () => {
      await doSave({ name, description });
      onRequestClose();
    };
    return /* @__PURE__ */ window.wp.element.createElement(components_default.Modal, {
      title,
      icon: edit_default,
      onRequestClose: () => onRequestClose()
    }, /* @__PURE__ */ window.wp.element.createElement(components_default.TextControl, {
      label: __("Name", "cm4all-wp-impex"),
      help: __("Name should be short and human readable", "cm4all-wp-impex"),
      value: name,
      onChange: setName
    }), /* @__PURE__ */ window.wp.element.createElement(components_default.TextareaControl, {
      label: __("Description", "cm4all-wp-impex"),
      help: __("Description may contain more expressive information describing the item", "cm4all-wp-impex"),
      value: description,
      onChange: setDescription
    }), /* @__PURE__ */ window.wp.element.createElement(components_default.Button, {
      variant: "primary",
      onClick: onSave,
      disabled: name === item.name && description === item.description
    }, "Save"));
  }

  // plugins/cm4all-wp-impex/src/components/delete-modal.mjs
  function delete_modal_default({ title, doDelete, onRequestClose, children }) {
    const onDelete = async () => {
      await doDelete();
      onRequestClose();
    };
    return /* @__PURE__ */ window.wp.element.createElement(components_default.Modal, {
      title,
      icon: cancel_circle_filled_default,
      onRequestClose: () => onRequestClose()
    }, /* @__PURE__ */ window.wp.element.createElement("p", null, children), /* @__PURE__ */ window.wp.element.createElement(components_default.Button, {
      variant: "primary",
      isDestructive: true,
      onClick: onDelete
    }, "Delete"));
  }

  // plugins/cm4all-wp-impex/src/components/screen-context.mjs
  var ContextProvider = element_default.createContext();
  function useScreenContext() {
    return element_default.useContext(ContextProvider);
  }
  ScreenContext = {
    normalizeFilename(fileName) {
      return fileName.replace(/[^a-z0-9\-_]/gi, "_").replace(/(-+)|(_+)/gi, ($) => $[0]).toLowerCase().slice(-32);
    },
    currentDateString() {
      const date = new Date();
      return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    }
  };
  function ScreenContextProvider({ children }) {
    return /* @__PURE__ */ window.wp.element.createElement(ContextProvider.Provider, {
      value: ScreenContext
    }, children);
  }

  // esbuild-globals-plugin:@cm4all-impex/store
  var store_default2 = window.wp.impex.store;

  // plugins/cm4all-wp-impex/src/components/export.mjs
  var debug = debug_default.default("wp.impex.dashboard.export");
  debug("loaded");
  function Export() {
    const { settings, exportProfiles, exports } = data_default.useSelect((select) => {
      const store = select(store_default2.KEY);
      return {
        settings: store.getSettings(),
        exportProfiles: store.getExportProfiles(),
        exports: store.getExports()
      };
    });
    const [exportProfile, setExportProfile] = element_default.useState();
    const exportProfileSelectRef = element_default.useRef();
    const _setExportProfile = (exportProfileName = null) => {
      const exportProfile2 = exportProfiles.find((_) => _.name === exportProfileName);
      setExportProfile(exportProfile2);
      exportProfileSelectRef.current.title = exportProfile2?.description;
    };
    element_default.useEffect(() => {
      _setExportProfile(exportProfiles?.[0]?.name);
    }, [exportProfiles]);
    const {
      createExport: _createExport,
      updateExport,
      deleteExport
    } = data_default.useDispatch(store_default2.KEY);
    const [modal, setModal] = element_default.useState(null);
    const [progress, setProgress] = element_default.useState(null);
    const screenContext = useScreenContext();
    console.log({ exportProfile, exportProfiles });
    const { currentUser } = data_default.useSelect((select) => ({
      currentUser: select("core").getCurrentUser()
    }));
    const createExport = async () => {
      const site_url = new URL(settings["site_url"]);
      const date = screenContext.currentDateString();
      const name = `${site_url.hostname}-${exportProfile.name}-${date}`;
      const description = `Export '${exportProfile.name}' created by user '${currentUser.name}' at ${date}`;
      setProgress({
        component: /* @__PURE__ */ window.wp.element.createElement(components_default.Modal, {
          title: __("Creating snapshot", "cm4all-wp-impex"),
          onRequestClose: () => {
          },
          overlayClassName: "blocking"
        }, /* @__PURE__ */ window.wp.element.createElement("progress", {
          indeterminate: "true"
        }))
      });
      await _createExport(exportProfile, name, description);
      setProgress();
    };
    const _saveSlicesChunk = async (exportDirHandle, response, chunk) => {
      const slices = await response;
      debug(`_saveSlicesChunk(chunk=%o) : %o`, chunk, response);
      const chunkDirHandle = await exportDirHandle.getDirectoryHandle(`chunk-${chunk.toString().padStart(4, "0")}`, { create: true });
      return Promise.all(slices.map(async (slice, index) => {
        const sliceFileHandle = await chunkDirHandle.getFileHandle(`slice-${index.toString().padStart(4, "0")}.json`, { create: true });
        slice = await hooks_default.applyFilters(filters_default.SLICE_REST_UNMARSHAL, filters_default.NAMESPACE, slice, index, chunkDirHandle);
        const writable = await sliceFileHandle.createWritable();
        await writable.write(JSON.stringify(slice, null, "  "));
        debug("slice(=%o) = %o", index, slice);
        await writable.close();
      }));
    };
    const onDownloadExport = async (_export) => {
      let _exportFolderName = null;
      try {
        _exportFolderName = screenContext.normalizeFilename(_export.name);
      } catch {
        return;
      }
      const exportsDirHandle = await window.showDirectoryPicker({
        startIn: "downloads",
        id: _exportFolderName
      });
      const exportDirHandle = await exportsDirHandle.getDirectoryHandle(_exportFolderName, {
        create: true
      });
      debug("download export %o", _export);
      const path = `${settings.base_uri}/export/${_export.id}/slice`;
      setProgress({
        component: /* @__PURE__ */ window.wp.element.createElement(components_default.Modal, {
          title: __("Downloading snapshot", "cm4all-wp-impex"),
          onRequestClose: () => {
          },
          overlayClassName: "blocking"
        }, /* @__PURE__ */ window.wp.element.createElement("progress", {
          indeterminate: "true"
        }))
      });
      const initialResponse = await api_fetch_default({
        path,
        parse: false
      });
      const x_wp_total = Number.parseInt(initialResponse.headers.get("X-WP-Total"), 10);
      const x_wp_total_pages = Number.parseInt(initialResponse.headers.get("X-WP-TotalPages"));
      const sliceChunks = [
        _saveSlicesChunk(exportDirHandle, initialResponse.json(), 1)
      ];
      for (let chunk = 2; chunk <= x_wp_total_pages; chunk++) {
        sliceChunks.push(_saveSlicesChunk(exportDirHandle, api_fetch_default({
          path: url_default.addQueryArgs(path, { page: chunk })
        }), chunk));
      }
      await Promise.all(sliceChunks);
      setProgress(null);
    };
    return /* @__PURE__ */ window.wp.element.createElement(window.wp.element.Fragment, null, /* @__PURE__ */ window.wp.element.createElement(components_default.Panel, {
      className: "export",
      header: __("Export", "cm4all-wp-impex")
    }, /* @__PURE__ */ window.wp.element.createElement(components_default.PanelBody, {
      title: __("Create snapshot", "cm4all-wp-impex"),
      opened: true,
      className: "create-export-form"
    }, /* @__PURE__ */ window.wp.element.createElement(wp.components.SelectControl, {
      ref: exportProfileSelectRef,
      disabled: !exportProfiles.length,
      label: __("Export Profile", "cm4all-wp-impex"),
      value: exportProfile?.name,
      onChange: (exportProfileName) => _setExportProfile(exportProfileName),
      options: [
        {
          name: __("Select an Export profile", "cm4all-wp-impex"),
          disabled: true
        },
        ...exportProfiles
      ].map((_) => ({
        value: _.disabled ? void 0 : _.name,
        label: _.name,
        disabled: _.disabled
      })),
      help: __("Export profiles define which WordPress data should be extracted to the snapshot", "cm4all-wp-impex")
    }), /* @__PURE__ */ window.wp.element.createElement(components_default.Button, {
      isPrimary: true,
      onClick: createExport,
      disabled: !exportProfiles.find((_) => _.name === exportProfile?.name)
    }, __("Create Snapshot", "cm4all-wp-impex"))), exports.map((_, index) => /* @__PURE__ */ window.wp.element.createElement(components_default.PanelBody, {
      key: _.id,
      title: _.name,
      initialOpen: index === 0
    }, /* @__PURE__ */ window.wp.element.createElement(components_default.PanelRow, null, /* @__PURE__ */ window.wp.element.createElement(components_default.Button, {
      isSecondary: true,
      onClick: () => onDownloadExport(_),
      icon: download_default
    }, __("Download snapshot", "cm4all-wp-impex")), /* @__PURE__ */ window.wp.element.createElement(components_default.DropdownMenu, {
      label: __("Additional actions on this export", "cm4all-wp-impex"),
      controls: [
        {
          title: __("Edit", "cm4all-wp-impex"),
          icon: edit_default,
          onClick: () => setModal({
            component: RenameModal,
            props: {
              title: __("Edit export", "cm4all-wp-impex"),
              async doSave(data) {
                await updateExport(_.id, data);
              },
              item: _
            }
          })
        },
        {
          title: __("Delete", "cm4all-wp-impex"),
          icon: cancel_circle_filled_default,
          onClick: () => setModal({
            component: delete_modal_default,
            props: {
              title: __("Delete export", "cm4all-wp-impex"),
              children: /* @__PURE__ */ window.wp.element.createElement(window.wp.element.Fragment, null, __("Are you really sure to delete export"), /* @__PURE__ */ window.wp.element.createElement("code", null, _.name), "?"),
              async doDelete() {
                await deleteExport(_.id);
              }
            }
          })
        }
      ]
    })), /* @__PURE__ */ window.wp.element.createElement(components_default.PanelRow, null, /* @__PURE__ */ window.wp.element.createElement("pre", null, JSON.stringify(_, null, "  ")))))), modal && /* @__PURE__ */ window.wp.element.createElement(modal.component, {
      ...modal.props,
      onRequestClose: setModal
    }), progress && /* @__PURE__ */ window.wp.element.createElement(components_default.Fill, {
      name: "progress",
      onRequestClose: () => {
      }
    }, progress.component));
  }

  // plugins/cm4all-wp-impex/src/components/import.mjs
  var debug2 = debug_default.default("wp.impex.dashboard.import");
  debug2("loaded");
  function Import() {
    const { currentUser } = data_default.useSelect((select) => ({
      currentUser: select("core").getCurrentUser()
    }));
    const { settings, importProfiles, imports } = data_default.useSelect((select) => {
      const store = select(store_default2.KEY);
      return {
        settings: store.getSettings(),
        importProfiles: store.getImportProfiles(),
        imports: store.getImports()
      };
    });
    const { createImport, updateImport, deleteImport, consumeImport } = data_default.useDispatch(store_default2.KEY);
    const [modal, setModal] = element_default.useState(null);
    const [progress, setProgress] = element_default.useState(null);
    const screenContext = useScreenContext();
    const [importProfile, setImportProfile] = element_default.useState();
    const importProfileSelectRef = element_default.useRef();
    const _setImportProfile = (importProfileName = null) => {
      const importProfile2 = importProfiles.find((_) => _.name === importProfileName);
      setImportProfile(importProfile2);
      importProfileSelectRef.current.title = importProfile2?.description;
    };
    element_default.useEffect(() => {
      _setImportProfile(importProfiles?.[0]?.name);
    }, [importProfiles]);
    const onConsumeImport = async (_import) => {
      debug2("onConsumeImport(%o)", _import);
      setProgress({
        component: /* @__PURE__ */ window.wp.element.createElement(components_default.Modal, {
          title: __("Importing data into WordPress ...", "cm4all-wp-impex"),
          onRequestClose: () => {
          },
          overlayClassName: "blocking"
        }, /* @__PURE__ */ window.wp.element.createElement("progress", {
          indeterminate: "true"
        }))
      });
      await consumeImport(_import.id, {}, null, null);
      setProgress();
    };
    const _getSliceFiles = async (importDirHandle) => {
      const slices = [];
      for await (let sliceChunkDirectoryHandle of importDirHandle.values()) {
        if (sliceChunkDirectoryHandle.kind === "directory") {
          for await (let sliceFileHandle of sliceChunkDirectoryHandle.values()) {
            if (sliceFileHandle.kind === "file" && sliceFileHandle.name.match(/^slice-\d+\.json$/)) {
              slices.push({
                fileHandle: sliceFileHandle,
                dirHandle: sliceChunkDirectoryHandle
              });
            }
          }
        }
      }
      slices.sort((l, r) => {
        const cval = l.dirHandle.name.localeCompare(r.dirHandle.name);
        if (cval === 0) {
          return l.fileHandle.name.localeCompare(r.fileHandle.name);
        }
        return cval;
      });
      return slices;
    };
    const onUpload = async () => {
      let importDirHandle = null;
      try {
        importDirHandle = await window.showDirectoryPicker({
          startIn: "downloads"
        });
      } catch {
        return;
      }
      debug2("upload export %o", importDirHandle.name);
      const date = screenContext.currentDateString();
      const name = importDirHandle.name;
      const description = `Import '${importDirHandle.name}' created by user '${currentUser.name}' at ${date}`;
      setProgress({
        component: /* @__PURE__ */ window.wp.element.createElement(components_default.Modal, {
          title: __("Uploading snapshot", "cm4all-wp-impex"),
          onRequestClose: () => {
          },
          overlayClassName: "blocking"
        }, /* @__PURE__ */ window.wp.element.createElement("progress", {
          indeterminate: "true"
        }))
      });
      const _import = (await createImport(name, description, importProfile, [])).payload;
      const sliceFiles = await _getSliceFiles(importDirHandle);
      const path = `${settings.base_uri}/import/${_import.id}/slice`;
      const sliceUploads = sliceFiles.map(async ({ fileHandle, dirHandle }, position) => {
        const formData = new FormData();
        let slice = JSON.parse(await (await fileHandle.getFile()).text());
        slice = await hooks_default.applyFilters(filters_default.SLICE_REST_UPLOAD, filters_default.NAMESPACE, slice, parseInt(fileHandle.name.match(/^slice-(\d+)\.json$/)[1]), dirHandle, formData);
        if (slice) {
          debug2("upload %o", {
            position,
            file: fileHandle.name,
            dir: dirHandle.name
          });
          formData.append("slice", JSON.stringify(slice, null, "  "));
          return api_fetch_default({
            method: "POST",
            path: url_default.addQueryArgs(path, { position }),
            body: formData,
            parse: false
          });
        }
      });
      const finished = await Promise.all(sliceUploads);
      setProgress();
    };
    return /* @__PURE__ */ window.wp.element.createElement(window.wp.element.Fragment, null, /* @__PURE__ */ window.wp.element.createElement(components_default.Panel, {
      className: "import",
      header: __("Import", "cm4all-wp-impex")
    }, /* @__PURE__ */ window.wp.element.createElement(components_default.PanelBody, {
      title: __("Upload snapshot to Wordpress", "cm4all-wp-impex"),
      opened: true,
      className: "upload-import-form"
    }, /* @__PURE__ */ window.wp.element.createElement(wp.components.SelectControl, {
      ref: importProfileSelectRef,
      disabled: !importProfiles.length,
      label: __("Import Profile", "cm4all-wp-impex"),
      value: importProfile?.name,
      onChange: (importProfileName) => _setImportProfile(importProfileName),
      options: [
        {
          name: __("Select an Import profile", "cm4all-wp-impex"),
          disabled: true
        },
        ...importProfiles
      ].map((_) => ({
        value: _.disabled ? void 0 : _.name,
        label: _.name,
        disabled: _.disabled
      })),
      help: __("Import profiles define which WordPress data should be consumed from the snapshot", "cm4all-wp-impex")
    }), /* @__PURE__ */ window.wp.element.createElement(components_default.Button, {
      isPrimary: true,
      onClick: onUpload,
      icon: upload_default,
      disabled: !importProfile
    }, __("Upload snapshot", "cm4all-wp-impex"))), imports.map((_, index) => /* @__PURE__ */ window.wp.element.createElement(components_default.PanelBody, {
      key: _.id,
      title: _.name,
      initialOpen: index === 0
    }, /* @__PURE__ */ window.wp.element.createElement(components_default.PanelRow, null, /* @__PURE__ */ window.wp.element.createElement(components_default.Button, {
      isDestructive: true,
      isPrimary: true,
      onClick: () => onConsumeImport(_),
      icon: cloud_upload_default
    }, __("Import uploaded snapshot", "cm4all-wp-impex")), /* @__PURE__ */ window.wp.element.createElement(components_default.DropdownMenu, {
      label: __("Additional actions on this import", "cm4all-wp-impex"),
      controls: [
        {
          title: __("Edit", "cm4all-wp-impex"),
          icon: edit_default,
          onClick: () => setModal({
            component: RenameModal,
            props: {
              title: __("Edit import snapshot", "cm4all-wp-impex"),
              async doSave(data) {
                await updateImport(_.id, data);
              },
              item: _
            }
          })
        },
        {
          title: __("Delete", "cm4all-wp-impex"),
          icon: cancel_circle_filled_default,
          onClick: () => setModal({
            component: delete_modal_default,
            props: {
              title: __("Delete import", "cm4all-wp-impex"),
              children: /* @__PURE__ */ window.wp.element.createElement(window.wp.element.Fragment, null, __("Are you really sure to delete import", "cm4all-wp-impex"), /* @__PURE__ */ window.wp.element.createElement("code", null, _.name), "?"),
              async doDelete() {
                await deleteImport(_.id);
              }
            }
          })
        }
      ]
    })), /* @__PURE__ */ window.wp.element.createElement(components_default.PanelRow, null, /* @__PURE__ */ window.wp.element.createElement("pre", {
      style: { overflow: "auto" }
    }, JSON.stringify(_, null, "  ")))))), modal && /* @__PURE__ */ window.wp.element.createElement(modal.component, {
      ...modal.props,
      onRequestClose: setModal
    }), progress && /* @__PURE__ */ window.wp.element.createElement(components_default.Fill, {
      name: "progress",
      onRequestClose: () => {
      }
    }, progress.component));
  }

  // plugins/cm4all-wp-impex/src/components/screen.mjs
  var debug3 = debug_default.default("wp.impex.dashboard.screen");
  debug3("loaded");
  var isFileystemApiAvailable = typeof window.showDirectoryPicker === "function";
  function screen_default() {
    return /* @__PURE__ */ window.wp.element.createElement("div", null, /* @__PURE__ */ window.wp.element.createElement("h1", null, __("Impex", "cm4all-wp-impex")), /* @__PURE__ */ window.wp.element.createElement(components_default.SlotFillProvider, null, /* @__PURE__ */ window.wp.element.createElement(components_default.Flex, {
      direction: "row",
      align: "top"
    }, /* @__PURE__ */ window.wp.element.createElement(components_default.FlexItem, {
      isBlock: true
    }, /* @__PURE__ */ window.wp.element.createElement(Export, null)), /* @__PURE__ */ window.wp.element.createElement(components_default.FlexItem, {
      isBlock: true
    }, /* @__PURE__ */ window.wp.element.createElement(Import, null))), /* @__PURE__ */ window.wp.element.createElement(components_default.Slot, {
      name: "progress"
    }), !isFileystemApiAvailable && /* @__PURE__ */ window.wp.element.createElement(components_default.Modal, {
      title: "Ouch - your browser does not support the File System Access API :-(",
      isDismissible: false
    }, /* @__PURE__ */ window.wp.element.createElement("p", null, "ImpEx Import / Export requires a browser implementing the", " ", /* @__PURE__ */ window.wp.element.createElement("a", {
      href: "https://web.dev/file-system-access/"
    }, "File System Access API"), "."), /* @__PURE__ */ window.wp.element.createElement("p", null, "Currently only Chromium based browsers like Chrome, Chromium, MS Edge are known to support this feature."), /* @__PURE__ */ window.wp.element.createElement("p", null, "See", " ", /* @__PURE__ */ window.wp.element.createElement("a", {
      href: "https://caniuse.com/mdn-api_window_showdirectorypicker"
    }, "here"), " ", "to find the latest list of browsers supporting the", " ", /* @__PURE__ */ window.wp.element.createElement("a", {
      href: "https://web.dev/file-system-access/"
    }, "File System Access API"), " ", "feature."))));
  }

  // plugins/cm4all-wp-impex/src/wp.impex.dashboard.mjs
  var debug4 = debug_default.default("wp.impex.dashboard");
  debug4("loaded");
  if (!document.querySelector(".notice.notice-error")) {
    element_default.render(/* @__PURE__ */ window.wp.element.createElement(ScreenContextProvider, null, /* @__PURE__ */ window.wp.element.createElement(screen_default, null)), document.getElementById("cm4all_wp_impex_wp_admin_dashboard"));
  }
})();
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCAiZXNidWlsZC1nbG9iYWxzLXBsdWdpbjpAd29yZHByZXNzL2VsZW1lbnQiLCAiZXNidWlsZC1nbG9iYWxzLXBsdWdpbjpAY200YWxsLWltcGV4L2RlYnVnIiwgImVzYnVpbGQtZ2xvYmFscy1wbHVnaW46QHdvcmRwcmVzcy9jb21wb25lbnRzIiwgImVzYnVpbGQtZ2xvYmFscy1wbHVnaW46QHdvcmRwcmVzcy9pMThuIiwgImVzYnVpbGQtZ2xvYmFscy1wbHVnaW46QHdvcmRwcmVzcy9hcGktZmV0Y2giLCAiZXNidWlsZC1nbG9iYWxzLXBsdWdpbjpAd29yZHByZXNzL2hvb2tzIiwgImVzYnVpbGQtZ2xvYmFscy1wbHVnaW46QHdvcmRwcmVzcy91cmwiLCAiZXNidWlsZC1nbG9iYWxzLXBsdWdpbjpAd29yZHByZXNzL2RhdGEiLCAiZXNidWlsZC1nbG9iYWxzLXBsdWdpbjpAY200YWxsLWltcGV4L2ZpbHRlcnMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvcHJpbWl0aXZlcy9idWlsZC1tb2R1bGUvc3ZnL0B3b3JkcHJlc3MvcHJpbWl0aXZlcy9zcmMvc3ZnL2luZGV4LmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L0B3b3JkcHJlc3MvaWNvbnMvc3JjL2xpYnJhcnkvY2FuY2VsLWNpcmNsZS1maWxsZWQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvQHdvcmRwcmVzcy9pY29ucy9zcmMvbGlicmFyeS9jbG91ZC11cGxvYWQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvQHdvcmRwcmVzcy9pY29ucy9zcmMvbGlicmFyeS9kb3dubG9hZC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9Ad29yZHByZXNzL2ljb25zL3NyYy9saWJyYXJ5L3BlbmNpbC5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9Ad29yZHByZXNzL2ljb25zL3NyYy9saWJyYXJ5L2VkaXQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvQHdvcmRwcmVzcy9pY29ucy9zcmMvbGlicmFyeS91cGxvYWQuanMiLCAiLi4vc3JjL2NvbXBvbmVudHMvcmVuYW1lLW1vZGFsLm1qcyIsICIuLi9zcmMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwubWpzIiwgIi4uL3NyYy9jb21wb25lbnRzL3NjcmVlbi1jb250ZXh0Lm1qcyIsICJlc2J1aWxkLWdsb2JhbHMtcGx1Z2luOkBjbTRhbGwtaW1wZXgvc3RvcmUiLCAiLi4vc3JjL2NvbXBvbmVudHMvZXhwb3J0Lm1qcyIsICIuLi9zcmMvY29tcG9uZW50cy9pbXBvcnQubWpzIiwgIi4uL3NyYy9jb21wb25lbnRzL3NjcmVlbi5tanMiLCAiLi4vc3JjL3dwLmltcGV4LmRhc2hib2FyZC5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwgImV4cG9ydCBkZWZhdWx0IHdpbmRvdy53cC5lbGVtZW50O1xuZXhwb3J0IGNvbnN0IHsgUGxhdGZvcm0sIFJhd0hUTUwsIGNyZWF0ZUludGVycG9sYXRlRWxlbWVudCwgcmVuZGVyVG9TdHJpbmcsIENoaWxkcmVuLCBDb21wb25lbnQsIEZyYWdtZW50LCBTdHJpY3RNb2RlLCBTdXNwZW5zZSwgY2xvbmVFbGVtZW50LCBjb25jYXRDaGlsZHJlbiwgY3JlYXRlQ29udGV4dCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlUmVmLCBmb3J3YXJkUmVmLCBpc1ZhbGlkRWxlbWVudCwgbGF6eSwgbWVtbywgc3dpdGNoQ2hpbGRyZW5Ob2RlTmFtZSwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZURlYnVnVmFsdWUsIHVzZUVmZmVjdCwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VNZW1vLCB1c2VSZWR1Y2VyLCB1c2VSZWYsIHVzZVN0YXRlLCBjcmVhdGVQb3J0YWwsIGZpbmRET01Ob2RlLCByZW5kZXIsIHVubW91bnRDb21wb25lbnRBdE5vZGUsIGlzRW1wdHlFbGVtZW50IH0gPSB3aW5kb3cud3AuZWxlbWVudDsiLCAiZXhwb3J0IGRlZmF1bHQgd2luZG93LndwLmltcGV4LmRlYnVnOyIsICJleHBvcnQgZGVmYXVsdCB3aW5kb3cud3AuY29tcG9uZW50czsiLCAiZXhwb3J0IGRlZmF1bHQgd2luZG93LndwLmkxOG47XG5leHBvcnQgY29uc3QgeyBfXywgX24sIF9ueCwgX3gsIGRlZmF1bHRJMThuLCBnZXRMb2NhbGVEYXRhLCBoYXNUcmFuc2xhdGlvbiwgaXNSVEwsIHJlc2V0TG9jYWxlRGF0YSwgc2V0TG9jYWxlRGF0YSwgc3ByaW50Ziwgc3Vic2NyaWJlLCBjcmVhdGVJMThuIH0gPSB3aW5kb3cud3AuaTE4bjsiLCAiZXhwb3J0IGRlZmF1bHQgd2luZG93LndwLmFwaUZldGNoOyIsICJleHBvcnQgZGVmYXVsdCB3aW5kb3cud3AuaG9va3M7XG5leHBvcnQgY29uc3QgeyBhY3Rpb25zLCBhZGRBY3Rpb24sIGFkZEZpbHRlciwgYXBwbHlGaWx0ZXJzLCBjcmVhdGVIb29rcywgY3VycmVudEFjdGlvbiwgY3VycmVudEZpbHRlciwgZGVmYXVsdEhvb2tzLCBkaWRBY3Rpb24sIGRpZEZpbHRlciwgZG9BY3Rpb24sIGRvaW5nQWN0aW9uLCBkb2luZ0ZpbHRlciwgZmlsdGVycywgaGFzQWN0aW9uLCBoYXNGaWx0ZXIsIHJlbW92ZUFjdGlvbiwgcmVtb3ZlQWxsQWN0aW9ucywgcmVtb3ZlQWxsRmlsdGVycywgcmVtb3ZlRmlsdGVyIH0gPSB3aW5kb3cud3AuaG9va3M7IiwgImV4cG9ydCBkZWZhdWx0IHdpbmRvdy53cC51cmw7IiwgImV4cG9ydCBkZWZhdWx0IHdpbmRvdy53cC5kYXRhOyIsICJleHBvcnQgZGVmYXVsdCB3aW5kb3cud3AuaW1wZXguZmlsdGVyczsiLCAiLyoqXG4gKiBFeHRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuLyoqIEB0eXBlZGVmIHt7aXNQcmVzc2VkPzogYm9vbGVhbn0gJiBpbXBvcnQoJ3JlYWN0JykuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPCdzdmcnPn0gU1ZHUHJvcHMgKi9cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgncmVhY3QnKS5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8J2NpcmNsZSc+fSBwcm9wc1xuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBDaXJjbGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBDaXJjbGUgPSAoIHByb3BzICkgPT4gY3JlYXRlRWxlbWVudCggJ2NpcmNsZScsIHByb3BzICk7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJ3JlYWN0JykuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPCdnJz59IHByb3BzXG4gKlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IEcgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBHID0gKCBwcm9wcyApID0+IGNyZWF0ZUVsZW1lbnQoICdnJywgcHJvcHMgKTtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgncmVhY3QnKS5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8J3BhdGgnPn0gcHJvcHNcbiAqXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gUGF0aCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IFBhdGggPSAoIHByb3BzICkgPT4gY3JlYXRlRWxlbWVudCggJ3BhdGgnLCBwcm9wcyApO1xuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCdyZWFjdCcpLkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjwncG9seWdvbic+fSBwcm9wc1xuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBQb2x5Z29uIGNvbXBvbmVudFxuICovXG5leHBvcnQgY29uc3QgUG9seWdvbiA9ICggcHJvcHMgKSA9PiBjcmVhdGVFbGVtZW50KCAncG9seWdvbicsIHByb3BzICk7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJ3JlYWN0JykuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPCdyZWN0Jz59IHByb3BzXG4gKlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IFJlY3QgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBSZWN0ID0gKCBwcm9wcyApID0+IGNyZWF0ZUVsZW1lbnQoICdyZWN0JywgcHJvcHMgKTtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgncmVhY3QnKS5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8J2RlZnMnPn0gcHJvcHNcbiAqXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gRGVmcyBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IERlZnMgPSAoIHByb3BzICkgPT4gY3JlYXRlRWxlbWVudCggJ2RlZnMnLCBwcm9wcyApO1xuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCdyZWFjdCcpLkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjwncmFkaWFsR3JhZGllbnQnPn0gcHJvcHNcbiAqXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gUmFkaWFsR3JhZGllbnQgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBSYWRpYWxHcmFkaWVudCA9ICggcHJvcHMgKSA9PlxuXHRjcmVhdGVFbGVtZW50KCAncmFkaWFsR3JhZGllbnQnLCBwcm9wcyApO1xuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCdyZWFjdCcpLkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjwnbGluZWFyR3JhZGllbnQnPn0gcHJvcHNcbiAqXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gTGluZWFyR3JhZGllbnQgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBMaW5lYXJHcmFkaWVudCA9ICggcHJvcHMgKSA9PlxuXHRjcmVhdGVFbGVtZW50KCAnbGluZWFyR3JhZGllbnQnLCBwcm9wcyApO1xuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCdyZWFjdCcpLkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjwnc3RvcCc+fSBwcm9wc1xuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBTdG9wIGNvbXBvbmVudFxuICovXG5leHBvcnQgY29uc3QgU3RvcCA9ICggcHJvcHMgKSA9PiBjcmVhdGVFbGVtZW50KCAnc3RvcCcsIHByb3BzICk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7U1ZHUHJvcHN9IHByb3BzIGlzUHJlc3NlZCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgU1ZHIHNob3VsZCBhcHBlYXIgYXMgcHJlc3NlZC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgIE90aGVyIHByb3BzIHdpbGwgYmUgcGFzc2VkIHRocm91Z2ggdG8gc3ZnIGNvbXBvbmVudC5cbiAqXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gU3RvcCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IFNWRyA9ICggeyBjbGFzc05hbWUsIGlzUHJlc3NlZCwgLi4ucHJvcHMgfSApID0+IHtcblx0Y29uc3QgYXBwbGllZFByb3BzID0ge1xuXHRcdC4uLnByb3BzLFxuXHRcdGNsYXNzTmFtZTpcblx0XHRcdGNsYXNzbmFtZXMoIGNsYXNzTmFtZSwgeyAnaXMtcHJlc3NlZCc6IGlzUHJlc3NlZCB9ICkgfHwgdW5kZWZpbmVkLFxuXHRcdHJvbGU6ICdpbWcnLFxuXHRcdCdhcmlhLWhpZGRlbic6IHRydWUsXG5cdFx0Zm9jdXNhYmxlOiBmYWxzZSxcblx0fTtcblxuXHQvLyBEaXNhYmxlIHJlYXNvbjogV2UgbmVlZCB0byBoYXZlIGEgd2F5IHRvIHJlbmRlciBIVE1MIHRhZyBmb3Igd2ViLlxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZm9yYmlkLWVsZW1lbnRzXG5cdHJldHVybiA8c3ZnIHsgLi4uYXBwbGllZFByb3BzIH0gLz47XG59O1xuIiwgIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBjYW5jZWxDaXJjbGVGaWxsZWQgPSAoXG5cdDxTVkcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHQ8UGF0aCBkPVwiTTEyIDIxQzE2Ljk3MDYgMjEgMjEgMTYuOTcwNiAyMSAxMkMyMSA3LjAyOTQ0IDE2Ljk3MDYgMyAxMiAzQzcuMDI5NDQgMyAzIDcuMDI5NDQgMyAxMkMzIDE2Ljk3MDYgNy4wMjk0NCAyMSAxMiAyMVpNMTUuNTMwMyA4LjQ2OTY3QzE1LjgyMzIgOC43NjI1NiAxNS44MjMyIDkuMjM3NDQgMTUuNTMwMyA5LjUzMDMzTDEzLjA2MDcgMTJMMTUuNTMwMyAxNC40Njk3QzE1LjgyMzIgMTQuNzYyNiAxNS44MjMyIDE1LjIzNzQgMTUuNTMwMyAxNS41MzAzQzE1LjIzNzQgMTUuODIzMiAxNC43NjI2IDE1LjgyMzIgMTQuNDY5NyAxNS41MzAzTDEyIDEzLjA2MDdMOS41MzAzMyAxNS41MzAzQzkuMjM3NDQgMTUuODIzMiA4Ljc2MjU2IDE1LjgyMzIgOC40Njk2NyAxNS41MzAzQzguMTc2NzggMTUuMjM3NCA4LjE3Njc4IDE0Ljc2MjYgOC40Njk2NyAxNC40Njk3TDEwLjkzOTMgMTJMOC40Njk2NyA5LjUzMDMzQzguMTc2NzggOS4yMzc0NCA4LjE3Njc4IDguNzYyNTYgOC40Njk2NyA4LjQ2OTY3QzguNzYyNTYgOC4xNzY3OCA5LjIzNzQ0IDguMTc2NzggOS41MzAzMyA4LjQ2OTY3TDEyIDEwLjkzOTNMMTQuNDY5NyA4LjQ2OTY3QzE0Ljc2MjYgOC4xNzY3OCAxNS4yMzc0IDguMTc2NzggMTUuNTMwMyA4LjQ2OTY3WlwiIC8+XG5cdDwvU1ZHPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2FuY2VsQ2lyY2xlRmlsbGVkO1xuIiwgIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBjbG91ZFVwbG9hZCA9IChcblx0PFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuXHRcdDxQYXRoIGQ9XCJNMTcuMyAxMC4xYzAtMi41LTIuMS00LjQtNC44LTQuNC0yLjIgMC00LjEgMS40LTQuNiAzLjNoLS4yQzUuNyA5IDQgMTAuNyA0IDEyLjhjMCAyLjEgMS43IDMuOCAzLjcgMy44aDljMS44IDAgMy4yLTEuNSAzLjItMy4zLjEtMS42LTEuMS0yLjktMi42LTMuMnptLS41IDUuMWgtNHYtMi40TDE0IDE0bDEtMS0zLTMtMyAzIDEgMSAxLjItMS4ydjIuNEg3LjdjLTEuMiAwLTIuMi0xLjEtMi4yLTIuM3MxLTIuNCAyLjItMi40SDlsLjMtMS4xYy40LTEuMyAxLjctMi4yIDMuMi0yLjIgMS44IDAgMy4zIDEuMyAzLjMgMi45djEuM2wxLjMuMmMuOC4xIDEuNC45IDEuNCAxLjggMCAxLS44IDEuOC0xLjcgMS44elwiIC8+XG5cdDwvU1ZHPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xvdWRVcGxvYWQ7XG4iLCAiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5cbmNvbnN0IGRvd25sb2FkID0gKFxuXHQ8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG5cdFx0PFBhdGggZD1cIk0xOCAxMS4zbC0xLTEuMS00IDRWM2gtMS41djExLjNMNyAxMC4ybC0xIDEuMSA2LjIgNS44IDUuOC01Ljh6bS41IDMuN3YzLjVoLTEzVjE1SDR2NWgxNnYtNWgtMS41elwiIC8+XG5cdDwvU1ZHPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZG93bmxvYWQ7XG4iLCAiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5cbmNvbnN0IHBlbmNpbCA9IChcblx0PFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuXHRcdDxQYXRoIGQ9XCJNMjAuMSA1LjFMMTYuOSAyIDYuMiAxMi43bC0xLjMgNC40IDQuNS0xLjNMMjAuMSA1LjF6TTQgMjAuOGg4di0xLjVINHYxLjV6XCIgLz5cblx0PC9TVkc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBwZW5jaWw7XG4iLCAiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHBlbmNpbCB9IGZyb20gJy4vcGVuY2lsJztcbmV4cG9ydCBkZWZhdWx0IHBlbmNpbDtcbiIsICIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcblxuY29uc3QgdXBsb2FkID0gKFxuXHQ8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG5cdFx0PFBhdGggZD1cIk0xOC41IDE1djMuNUgxM1Y2LjdsNC41IDQuMSAxLTEuMS02LjItNS44LTUuOCA1LjggMSAxLjEgNC00djExLjdoLTZWMTVINHY1aDE2di01elwiIC8+XG5cdDwvU1ZHPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkO1xuIiwgImltcG9ydCBlbGVtZW50IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmltcG9ydCBjb21wb25lbnRzIGZyb20gXCJAd29yZHByZXNzL2NvbXBvbmVudHNcIjtcbmltcG9ydCBkYXRhIGZyb20gXCJAd29yZHByZXNzL2RhdGFcIjtcbmltcG9ydCB7IF9fLCBzcHJpbnRmIH0gZnJvbSBcIkB3b3JkcHJlc3MvaTE4blwiO1xuaW1wb3J0IHsgZWRpdCB9IGZyb20gXCJAd29yZHByZXNzL2ljb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbmFtZU1vZGFsKHsgdGl0bGUsIGRvU2F2ZSwgaXRlbSwgb25SZXF1ZXN0Q2xvc2UgfSkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBlbGVtZW50LnVzZVN0YXRlKGl0ZW0ubmFtZSk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gZWxlbWVudC51c2VTdGF0ZShpdGVtLmRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBvblNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZG9TYXZlKHsgbmFtZSwgZGVzY3JpcHRpb24gfSk7XG5cbiAgICBvblJlcXVlc3RDbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGNvbXBvbmVudHMuTW9kYWxcbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIGljb249e2VkaXR9XG4gICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4gb25SZXF1ZXN0Q2xvc2UoKX1cbiAgICA+XG4gICAgICA8Y29tcG9uZW50cy5UZXh0Q29udHJvbFxuICAgICAgICBsYWJlbD17X18oXCJOYW1lXCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgICBoZWxwPXtfXyhcIk5hbWUgc2hvdWxkIGJlIHNob3J0IGFuZCBodW1hbiByZWFkYWJsZVwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXtzZXROYW1lfVxuICAgICAgLz5cblxuICAgICAgPGNvbXBvbmVudHMuVGV4dGFyZWFDb250cm9sXG4gICAgICAgIGxhYmVsPXtfXyhcIkRlc2NyaXB0aW9uXCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgICBoZWxwPXtfXyhcbiAgICAgICAgICBcIkRlc2NyaXB0aW9uIG1heSBjb250YWluIG1vcmUgZXhwcmVzc2l2ZSBpbmZvcm1hdGlvbiBkZXNjcmliaW5nIHRoZSBpdGVtXCIsXG4gICAgICAgICAgXCJjbTRhbGwtd3AtaW1wZXhcIixcbiAgICAgICAgKX1cbiAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICBvbkNoYW5nZT17c2V0RGVzY3JpcHRpb259XG4gICAgICAvPlxuXG4gICAgICA8Y29tcG9uZW50cy5CdXR0b25cbiAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICBvbkNsaWNrPXtvblNhdmV9XG4gICAgICAgIGRpc2FibGVkPXtuYW1lID09PSBpdGVtLm5hbWUgJiYgZGVzY3JpcHRpb24gPT09IGl0ZW0uZGVzY3JpcHRpb259XG4gICAgICA+XG4gICAgICAgIFNhdmVcbiAgICAgIDwvY29tcG9uZW50cy5CdXR0b24+XG4gICAgPC9jb21wb25lbnRzLk1vZGFsPlxuICApO1xufVxuIiwgImltcG9ydCBjb21wb25lbnRzIGZyb20gXCJAd29yZHByZXNzL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IGNhbmNlbENpcmNsZUZpbGxlZCB9IGZyb20gXCJAd29yZHByZXNzL2ljb25zXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiUmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgdGl0bGUsIGRvRGVsZXRlLCBvblJlcXVlc3RDbG9zZSwgY2hpbGRyZW4gfSkge1xuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkb0RlbGV0ZSgpO1xuXG4gICAgb25SZXF1ZXN0Q2xvc2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxjb21wb25lbnRzLk1vZGFsXG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBpY29uPXtjYW5jZWxDaXJjbGVGaWxsZWR9XG4gICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4gb25SZXF1ZXN0Q2xvc2UoKX1cbiAgICA+XG4gICAgICA8cD57Y2hpbGRyZW59PC9wPlxuICAgICAgPGNvbXBvbmVudHMuQnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaXNEZXN0cnVjdGl2ZSBvbkNsaWNrPXtvbkRlbGV0ZX0+XG4gICAgICAgIERlbGV0ZVxuICAgICAgPC9jb21wb25lbnRzLkJ1dHRvbj5cbiAgICA8L2NvbXBvbmVudHMuTW9kYWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IGVsZW1lbnQgZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSBlbGVtZW50LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2NyZWVuQ29udGV4dCgpIHtcbiAgcmV0dXJuIGVsZW1lbnQudXNlQ29udGV4dChDb250ZXh0UHJvdmlkZXIpO1xufVxuXG5TY3JlZW5Db250ZXh0ID0ge1xuICBub3JtYWxpemVGaWxlbmFtZShmaWxlTmFtZSkge1xuICAgIHJldHVybiAoXG4gICAgICBmaWxlTmFtZVxuICAgICAgICAucmVwbGFjZSgvW15hLXowLTlcXC1fXS9naSwgXCJfXCIpXG4gICAgICAgIC5yZXBsYWNlKC8oLSspfChfKykvZ2ksICgkKSA9PiAkWzBdKVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAvLyBhbGxvdyBhIG1heGltdW0gb2YgMzIgY2hhcmFjdGVyc1xuICAgICAgICAuc2xpY2UoLTMyKVxuICAgICk7XG4gIH0sXG4gIGN1cnJlbnREYXRlU3RyaW5nKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7KFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9LSR7KFxuICAgICAgXCIwXCIgKyBkYXRlLmdldERhdGUoKVxuICAgICkuc2xpY2UoLTIpfS0ke2RhdGUuZ2V0SG91cnMoKX0tJHtkYXRlLmdldE1pbnV0ZXMoKX0tJHtkYXRlLmdldFNlY29uZHMoKX1gO1xuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNjcmVlbkNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFByb3ZpZGVyLlByb3ZpZGVyIHZhbHVlPXtTY3JlZW5Db250ZXh0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHRQcm92aWRlci5Qcm92aWRlcj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB3aW5kb3cud3AuaW1wZXguc3RvcmU7IiwgImltcG9ydCBlbGVtZW50IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcbmltcG9ydCBjb21wb25lbnRzIGZyb20gXCJAd29yZHByZXNzL2NvbXBvbmVudHNcIjtcbmltcG9ydCBhcGlGZXRjaCBmcm9tIFwiQHdvcmRwcmVzcy9hcGktZmV0Y2hcIjtcbmltcG9ydCBob29rcyBmcm9tIFwiQHdvcmRwcmVzcy9ob29rc1wiO1xuaW1wb3J0IHVybCBmcm9tIFwiQHdvcmRwcmVzcy91cmxcIjtcbmltcG9ydCBkYXRhIGZyb20gXCJAd29yZHByZXNzL2RhdGFcIjtcbmltcG9ydCB7IF9fLCBzcHJpbnRmIH0gZnJvbSBcIkB3b3JkcHJlc3MvaTE4blwiO1xuaW1wb3J0IERlYnVnIGZyb20gXCJAY200YWxsLWltcGV4L2RlYnVnXCI7XG5pbXBvcnQgSW1wZXhGaWx0ZXJzIGZyb20gXCJAY200YWxsLWltcGV4L2ZpbHRlcnNcIjtcbmltcG9ydCB7IGVkaXQsIGNhbmNlbENpcmNsZUZpbGxlZCwgZG93bmxvYWQgfSBmcm9tIFwiQHdvcmRwcmVzcy9pY29uc1wiO1xuXG5pbXBvcnQgUmVuYW1lTW9kYWwgZnJvbSBcIi4vcmVuYW1lLW1vZGFsLm1qc1wiO1xuaW1wb3J0IERlbGV0ZU1vZGFsIGZyb20gXCIuL2RlbGV0ZS1tb2RhbC5tanNcIjtcbmltcG9ydCB1c2VTY3JlZW5Db250ZXh0IGZyb20gXCIuL3NjcmVlbi1jb250ZXh0Lm1qc1wiO1xuXG5pbXBvcnQgU3RvcmUgZnJvbSBcIkBjbTRhbGwtaW1wZXgvc3RvcmVcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1Zy5kZWZhdWx0KFwid3AuaW1wZXguZGFzaGJvYXJkLmV4cG9ydFwiKTtcbmRlYnVnKFwibG9hZGVkXCIpO1xuXG4vL2NvbnN0IHsgX18sIHNwcmludGYgfSA9IGkxOG47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4cG9ydCgpIHtcbiAgY29uc3QgeyBzZXR0aW5ncywgZXhwb3J0UHJvZmlsZXMsIGV4cG9ydHMgfSA9IGRhdGEudXNlU2VsZWN0KChzZWxlY3QpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHNlbGVjdChTdG9yZS5LRVkpO1xuICAgIHJldHVybiB7XG4gICAgICBzZXR0aW5nczogc3RvcmUuZ2V0U2V0dGluZ3MoKSxcbiAgICAgIGV4cG9ydFByb2ZpbGVzOiBzdG9yZS5nZXRFeHBvcnRQcm9maWxlcygpLFxuICAgICAgZXhwb3J0czogc3RvcmUuZ2V0RXhwb3J0cygpLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IFtleHBvcnRQcm9maWxlLCBzZXRFeHBvcnRQcm9maWxlXSA9IGVsZW1lbnQudXNlU3RhdGUoKTtcbiAgY29uc3QgZXhwb3J0UHJvZmlsZVNlbGVjdFJlZiA9IGVsZW1lbnQudXNlUmVmKCk7XG5cbiAgY29uc3QgX3NldEV4cG9ydFByb2ZpbGUgPSAoZXhwb3J0UHJvZmlsZU5hbWUgPSBudWxsKSA9PiB7XG4gICAgY29uc3QgZXhwb3J0UHJvZmlsZSA9IGV4cG9ydFByb2ZpbGVzLmZpbmQoXG4gICAgICAoXykgPT4gXy5uYW1lID09PSBleHBvcnRQcm9maWxlTmFtZVxuICAgICk7XG4gICAgc2V0RXhwb3J0UHJvZmlsZShleHBvcnRQcm9maWxlKTtcbiAgICBleHBvcnRQcm9maWxlU2VsZWN0UmVmLmN1cnJlbnQudGl0bGUgPSBleHBvcnRQcm9maWxlPy5kZXNjcmlwdGlvbjtcbiAgfTtcblxuICBlbGVtZW50LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgX3NldEV4cG9ydFByb2ZpbGUoZXhwb3J0UHJvZmlsZXM/LlswXT8ubmFtZSk7XG4gIH0sIFtleHBvcnRQcm9maWxlc10pO1xuXG4gIGNvbnN0IHtcbiAgICBjcmVhdGVFeHBvcnQ6IF9jcmVhdGVFeHBvcnQsXG4gICAgdXBkYXRlRXhwb3J0LFxuICAgIGRlbGV0ZUV4cG9ydCxcbiAgfSA9IGRhdGEudXNlRGlzcGF0Y2goU3RvcmUuS0VZIC8qLCBbXSovKTtcblxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IGVsZW1lbnQudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gZWxlbWVudC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBzY3JlZW5Db250ZXh0ID0gdXNlU2NyZWVuQ29udGV4dCgpO1xuXG4gIGNvbnNvbGUubG9nKHsgZXhwb3J0UHJvZmlsZSwgZXhwb3J0UHJvZmlsZXMgfSk7XG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IGRhdGEudXNlU2VsZWN0KChzZWxlY3QpID0+ICh7XG4gICAgY3VycmVudFVzZXI6IHNlbGVjdChcImNvcmVcIikuZ2V0Q3VycmVudFVzZXIoKSxcbiAgfSkpO1xuXG4gIGNvbnN0IGNyZWF0ZUV4cG9ydCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzaXRlX3VybCA9IG5ldyBVUkwoc2V0dGluZ3NbXCJzaXRlX3VybFwiXSk7XG5cbiAgICBjb25zdCBkYXRlID0gc2NyZWVuQ29udGV4dC5jdXJyZW50RGF0ZVN0cmluZygpO1xuICAgIGNvbnN0IG5hbWUgPSBgJHtzaXRlX3VybC5ob3N0bmFtZX0tJHtleHBvcnRQcm9maWxlLm5hbWV9LSR7ZGF0ZX1gO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYEV4cG9ydCAnJHtleHBvcnRQcm9maWxlLm5hbWV9JyBjcmVhdGVkIGJ5IHVzZXIgJyR7Y3VycmVudFVzZXIubmFtZX0nIGF0ICR7ZGF0ZX1gO1xuXG4gICAgc2V0UHJvZ3Jlc3Moe1xuICAgICAgY29tcG9uZW50OiAoXG4gICAgICAgIDxjb21wb25lbnRzLk1vZGFsXG4gICAgICAgICAgdGl0bGU9e19fKFwiQ3JlYXRpbmcgc25hcHNob3RcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHt9fVxuICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJibG9ja2luZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cHJvZ3Jlc3MgaW5kZXRlcm1pbmF0ZT1cInRydWVcIj48L3Byb2dyZXNzPlxuICAgICAgICA8L2NvbXBvbmVudHMuTW9kYWw+XG4gICAgICApLFxuICAgIH0pO1xuICAgIGF3YWl0IF9jcmVhdGVFeHBvcnQoZXhwb3J0UHJvZmlsZSwgbmFtZSwgZGVzY3JpcHRpb24pO1xuICAgIHNldFByb2dyZXNzKCk7XG4gIH07XG5cbiAgY29uc3QgX3NhdmVTbGljZXNDaHVuayA9IGFzeW5jIChleHBvcnREaXJIYW5kbGUsIHJlc3BvbnNlLCBjaHVuaykgPT4ge1xuICAgIGNvbnN0IHNsaWNlcyA9IGF3YWl0IHJlc3BvbnNlO1xuICAgIGRlYnVnKGBfc2F2ZVNsaWNlc0NodW5rKGNodW5rPSVvKSA6ICVvYCwgY2h1bmssIHJlc3BvbnNlKTtcblxuICAgIC8vIGNyZWF0ZSBjaHVuayBzdWIgZGlyZWN0b3J5XG4gICAgY29uc3QgY2h1bmtEaXJIYW5kbGUgPSBhd2FpdCBleHBvcnREaXJIYW5kbGUuZ2V0RGlyZWN0b3J5SGFuZGxlKFxuICAgICAgYGNodW5rLSR7Y2h1bmsudG9TdHJpbmcoKS5wYWRTdGFydCg0LCBcIjBcIil9YCxcbiAgICAgIHsgY3JlYXRlOiB0cnVlIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgc2xpY2VzLm1hcChhc3luYyAoc2xpY2UsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNsaWNlRmlsZUhhbmRsZSA9IGF3YWl0IGNodW5rRGlySGFuZGxlLmdldEZpbGVIYW5kbGUoXG4gICAgICAgICAgYHNsaWNlLSR7aW5kZXgudG9TdHJpbmcoKS5wYWRTdGFydCg0LCBcIjBcIil9Lmpzb25gLFxuICAgICAgICAgIHsgY3JlYXRlOiB0cnVlIH1cbiAgICAgICAgKTtcblxuICAgICAgICBzbGljZSA9IGF3YWl0IGhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgICAgICBJbXBleEZpbHRlcnMuU0xJQ0VfUkVTVF9VTk1BUlNIQUwsXG4gICAgICAgICAgSW1wZXhGaWx0ZXJzLk5BTUVTUEFDRSxcbiAgICAgICAgICBzbGljZSxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBjaHVua0RpckhhbmRsZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIEZpbGVTeXN0ZW1Xcml0YWJsZUZpbGVTdHJlYW0gdG8gd3JpdGUgdG8uXG4gICAgICAgIGNvbnN0IHdyaXRhYmxlID0gYXdhaXQgc2xpY2VGaWxlSGFuZGxlLmNyZWF0ZVdyaXRhYmxlKCk7XG4gICAgICAgIC8vIFdyaXRlIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSB0byB0aGUgc3RyZWFtLlxuICAgICAgICBhd2FpdCB3cml0YWJsZS53cml0ZShKU09OLnN0cmluZ2lmeShzbGljZSwgbnVsbCwgXCIgIFwiKSk7XG4gICAgICAgIGRlYnVnKFwic2xpY2UoPSVvKSA9ICVvXCIsIGluZGV4LCBzbGljZSk7XG4gICAgICAgIC8vIENsb3NlIHRoZSBmaWxlIGFuZCB3cml0ZSB0aGUgY29udGVudHMgdG8gZGlzay5cbiAgICAgICAgYXdhaXQgd3JpdGFibGUuY2xvc2UoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBvbkRvd25sb2FkRXhwb3J0ID0gYXN5bmMgKF9leHBvcnQpID0+IHtcbiAgICBsZXQgX2V4cG9ydEZvbGRlck5hbWUgPSBudWxsO1xuICAgIC8vIHNob3dEaXJlY3RvcnlQaWNrZXIgd2lsbCB0aHJvdyBhIERPTUV4eGNlcHRpb24gaW4gY2FzZSB0aGUgdXNlciBwcmVzc2VkIGNhbmNlbFxuICAgIHRyeSB7XG4gICAgICAvLyBjb2xvbnMgbmVlZCB0byBiZSByZXBsYWNlZCBvdGhlcndpc2Ugc2hvd0RpcmVjdG9yeVBpY2tlciB3aWxsIGZhaWxcbiAgICAgIF9leHBvcnRGb2xkZXJOYW1lID0gc2NyZWVuQ29udGV4dC5ub3JtYWxpemVGaWxlbmFtZShfZXhwb3J0Lm5hbWUpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNlZSBodHRwczovL3dlYi5kZXYvZmlsZS1zeXN0ZW0tYWNjZXNzL1xuICAgIGNvbnN0IGV4cG9ydHNEaXJIYW5kbGUgPSBhd2FpdCB3aW5kb3cuc2hvd0RpcmVjdG9yeVBpY2tlcih7XG4gICAgICAvLyBZb3UgY2FuIHN1Z2dlc3QgYSBkZWZhdWx0IHN0YXJ0IGRpcmVjdG9yeSBieSBwYXNzaW5nIGEgc3RhcnRJbiBwcm9wZXJ0eSB0byB0aGUgc2hvd1NhdmVGaWxlUGlja2VyXG4gICAgICBzdGFydEluOiBcImRvd25sb2Fkc1wiLFxuICAgICAgLy8gSWYgYW4gaWQgaXMgc3BlY2lmaWVkLCB0aGUgZmlsZSBwaWNrZXIgaW1wbGVtZW50YXRpb24gd2lsbCByZW1lbWJlciBhIHNlcGFyYXRlIGxhc3QtdXNlZCBkaXJlY3RvcnkgZm9yIHBpY2tlcnMgd2l0aCB0aGF0IHNhbWUgaWQuXG4gICAgICBpZDogX2V4cG9ydEZvbGRlck5hbWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBleHBvcnREaXJIYW5kbGUgPSBhd2FpdCBleHBvcnRzRGlySGFuZGxlLmdldERpcmVjdG9yeUhhbmRsZShcbiAgICAgIF9leHBvcnRGb2xkZXJOYW1lLFxuICAgICAge1xuICAgICAgICBjcmVhdGU6IHRydWUsXG4gICAgICB9XG4gICAgKTtcbiAgICBkZWJ1ZyhcImRvd25sb2FkIGV4cG9ydCAlb1wiLCBfZXhwb3J0KTtcblxuICAgIGNvbnN0IHBhdGggPSBgJHtzZXR0aW5ncy5iYXNlX3VyaX0vZXhwb3J0LyR7X2V4cG9ydC5pZH0vc2xpY2VgO1xuXG4gICAgc2V0UHJvZ3Jlc3Moe1xuICAgICAgY29tcG9uZW50OiAoXG4gICAgICAgIDxjb21wb25lbnRzLk1vZGFsXG4gICAgICAgICAgdGl0bGU9e19fKFwiRG93bmxvYWRpbmcgc25hcHNob3RcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHt9fVxuICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJibG9ja2luZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cHJvZ3Jlc3MgaW5kZXRlcm1pbmF0ZT1cInRydWVcIj48L3Byb2dyZXNzPlxuICAgICAgICA8L2NvbXBvbmVudHMuTW9kYWw+XG4gICAgICApLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5pdGlhbFJlc3BvbnNlID0gYXdhaXQgYXBpRmV0Y2goe1xuICAgICAgcGF0aCxcbiAgICAgIC8vIHBhcnNlOiBmYWxzZSBpcyBuZWVkZWQgdG8gZ2V0YSBhY2Nlc3MgdG8gdGhlIGhlYWRlcnNcbiAgICAgIHBhcnNlOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHhfd3BfdG90YWwgPSBOdW1iZXIucGFyc2VJbnQoXG4gICAgICBpbml0aWFsUmVzcG9uc2UuaGVhZGVycy5nZXQoXCJYLVdQLVRvdGFsXCIpLFxuICAgICAgMTBcbiAgICApO1xuICAgIGNvbnN0IHhfd3BfdG90YWxfcGFnZXMgPSBOdW1iZXIucGFyc2VJbnQoXG4gICAgICBpbml0aWFsUmVzcG9uc2UuaGVhZGVycy5nZXQoXCJYLVdQLVRvdGFsUGFnZXNcIilcbiAgICApO1xuXG4gICAgY29uc3Qgc2xpY2VDaHVua3MgPSBbXG4gICAgICBfc2F2ZVNsaWNlc0NodW5rKGV4cG9ydERpckhhbmRsZSwgaW5pdGlhbFJlc3BvbnNlLmpzb24oKSwgMSksXG4gICAgXTtcbiAgICBmb3IgKGxldCBjaHVuayA9IDI7IGNodW5rIDw9IHhfd3BfdG90YWxfcGFnZXM7IGNodW5rKyspIHtcbiAgICAgIHNsaWNlQ2h1bmtzLnB1c2goXG4gICAgICAgIF9zYXZlU2xpY2VzQ2h1bmsoXG4gICAgICAgICAgZXhwb3J0RGlySGFuZGxlLFxuICAgICAgICAgIGFwaUZldGNoKHtcbiAgICAgICAgICAgIHBhdGg6IHVybC5hZGRRdWVyeUFyZ3MocGF0aCwgeyBwYWdlOiBjaHVuayB9KSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaHVua1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKHNsaWNlQ2h1bmtzKTtcbiAgICBzZXRQcm9ncmVzcyhudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Y29tcG9uZW50cy5QYW5lbFxuICAgICAgICBjbGFzc05hbWU9XCJleHBvcnRcIlxuICAgICAgICBoZWFkZXI9e19fKFwiRXhwb3J0XCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgPlxuICAgICAgICA8Y29tcG9uZW50cy5QYW5lbEJvZHlcbiAgICAgICAgICB0aXRsZT17X18oXCJDcmVhdGUgc25hcHNob3RcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgb3BlbmVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3JlYXRlLWV4cG9ydC1mb3JtXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx3cC5jb21wb25lbnRzLlNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgIHJlZj17ZXhwb3J0UHJvZmlsZVNlbGVjdFJlZn1cbiAgICAgICAgICAgIGRpc2FibGVkPXshZXhwb3J0UHJvZmlsZXMubGVuZ3RofVxuICAgICAgICAgICAgbGFiZWw9e19fKFwiRXhwb3J0IFByb2ZpbGVcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgICB2YWx1ZT17ZXhwb3J0UHJvZmlsZT8ubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXhwb3J0UHJvZmlsZU5hbWUpID0+XG4gICAgICAgICAgICAgIF9zZXRFeHBvcnRQcm9maWxlKGV4cG9ydFByb2ZpbGVOYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogX18oXCJTZWxlY3QgYW4gRXhwb3J0IHByb2ZpbGVcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC4uLmV4cG9ydFByb2ZpbGVzLFxuICAgICAgICAgICAgXS5tYXAoKF8pID0+ICh7XG4gICAgICAgICAgICAgIHZhbHVlOiBfLmRpc2FibGVkID8gdW5kZWZpbmVkIDogXy5uYW1lLFxuICAgICAgICAgICAgICBsYWJlbDogXy5uYW1lLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogXy5kaXNhYmxlZCxcbiAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgIGhlbHA9e19fKFxuICAgICAgICAgICAgICBcIkV4cG9ydCBwcm9maWxlcyBkZWZpbmUgd2hpY2ggV29yZFByZXNzIGRhdGEgc2hvdWxkIGJlIGV4dHJhY3RlZCB0byB0aGUgc25hcHNob3RcIixcbiAgICAgICAgICAgICAgXCJjbTRhbGwtd3AtaW1wZXhcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+PC93cC5jb21wb25lbnRzLlNlbGVjdENvbnRyb2w+XG5cbiAgICAgICAgICA8Y29tcG9uZW50cy5CdXR0b25cbiAgICAgICAgICAgIGlzUHJpbWFyeVxuICAgICAgICAgICAgb25DbGljaz17Y3JlYXRlRXhwb3J0fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAhZXhwb3J0UHJvZmlsZXMuZmluZCgoXykgPT4gXy5uYW1lID09PSBleHBvcnRQcm9maWxlPy5uYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXyhcIkNyZWF0ZSBTbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgICA8L2NvbXBvbmVudHMuQnV0dG9uPlxuICAgICAgICA8L2NvbXBvbmVudHMuUGFuZWxCb2R5PlxuICAgICAgICB7ZXhwb3J0cy5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGNvbXBvbmVudHMuUGFuZWxCb2R5XG4gICAgICAgICAgICBrZXk9e18uaWR9XG4gICAgICAgICAgICB0aXRsZT17Xy5uYW1lfVxuICAgICAgICAgICAgaW5pdGlhbE9wZW49e2luZGV4ID09PSAwfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjb21wb25lbnRzLlBhbmVsUm93PlxuICAgICAgICAgICAgICA8Y29tcG9uZW50cy5CdXR0b25cbiAgICAgICAgICAgICAgICBpc1NlY29uZGFyeVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRG93bmxvYWRFeHBvcnQoXyl9XG4gICAgICAgICAgICAgICAgaWNvbj17ZG93bmxvYWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7X18oXCJEb3dubG9hZCBzbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgICAgICAgPC9jb21wb25lbnRzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgPGNvbXBvbmVudHMuRHJvcGRvd25NZW51XG4gICAgICAgICAgICAgICAgLy8gaWNvbj17bW9yZVZlcnRpY2FsfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXyhcbiAgICAgICAgICAgICAgICAgIFwiQWRkaXRpb25hbCBhY3Rpb25zIG9uIHRoaXMgZXhwb3J0XCIsXG4gICAgICAgICAgICAgICAgICBcImNtNGFsbC13cC1pbXBleFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBjb250cm9scz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogX18oXCJFZGl0XCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBlZGl0LFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUmVuYW1lTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX18oXCJFZGl0IGV4cG9ydFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgZG9TYXZlKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVFeHBvcnQoXy5pZCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IF8sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9fKFwiRGVsZXRlXCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBjYW5jZWxDaXJjbGVGaWxsZWQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBEZWxldGVNb2RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfXyhcIkRlbGV0ZSBleHBvcnRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfXyhcIkFyZSB5b3UgcmVhbGx5IHN1cmUgdG8gZGVsZXRlIGV4cG9ydFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPntfLm5hbWV9PC9jb2RlPj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgZG9EZWxldGUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlRXhwb3J0KF8uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvY29tcG9uZW50cy5QYW5lbFJvdz5cbiAgICAgICAgICAgIDxjb21wb25lbnRzLlBhbmVsUm93PlxuICAgICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShfLCBudWxsLCBcIiAgXCIpfTwvcHJlPlxuICAgICAgICAgICAgPC9jb21wb25lbnRzLlBhbmVsUm93PlxuICAgICAgICAgIDwvY29tcG9uZW50cy5QYW5lbEJvZHk+XG4gICAgICAgICkpfVxuICAgICAgPC9jb21wb25lbnRzLlBhbmVsPlxuICAgICAge21vZGFsICYmIDxtb2RhbC5jb21wb25lbnQgey4uLm1vZGFsLnByb3BzfSBvblJlcXVlc3RDbG9zZT17c2V0TW9kYWx9IC8+fVxuICAgICAge3Byb2dyZXNzICYmIChcbiAgICAgICAgPGNvbXBvbmVudHMuRmlsbCBuYW1lPVwicHJvZ3Jlc3NcIiBvblJlcXVlc3RDbG9zZT17KCkgPT4ge319PlxuICAgICAgICAgIHtwcm9ncmVzcy5jb21wb25lbnR9XG4gICAgICAgIDwvY29tcG9uZW50cy5GaWxsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgZWxlbWVudCBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5pbXBvcnQgY29tcG9uZW50cyBmcm9tIFwiQHdvcmRwcmVzcy9jb21wb25lbnRzXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiQHdvcmRwcmVzcy9kYXRhXCI7XG5pbXBvcnQgdXJsIGZyb20gXCJAd29yZHByZXNzL3VybFwiO1xuaW1wb3J0IHsgX18sIHNwcmludGYgfSBmcm9tIFwiQHdvcmRwcmVzcy9pMThuXCI7XG5pbXBvcnQgaG9va3MgZnJvbSBcIkB3b3JkcHJlc3MvaG9va3NcIjtcbmltcG9ydCBJbXBleEZpbHRlcnMgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZmlsdGVyc1wiO1xuaW1wb3J0IERlYnVnIGZyb20gXCJAY200YWxsLWltcGV4L2RlYnVnXCI7XG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSBcIkB3b3JkcHJlc3MvYXBpLWZldGNoXCI7XG5pbXBvcnQge1xuICBlZGl0LFxuICBjYW5jZWxDaXJjbGVGaWxsZWQsXG4gIHVwbG9hZCxcbiAgY2xvdWRVcGxvYWQsXG59IGZyb20gXCJAd29yZHByZXNzL2ljb25zXCI7XG5pbXBvcnQgUmVuYW1lTW9kYWwgZnJvbSBcIi4vcmVuYW1lLW1vZGFsLm1qc1wiO1xuaW1wb3J0IERlbGV0ZU1vZGFsIGZyb20gXCIuL2RlbGV0ZS1tb2RhbC5tanNcIjtcbmltcG9ydCB1c2VTY3JlZW5Db250ZXh0IGZyb20gXCIuL3NjcmVlbi1jb250ZXh0Lm1qc1wiO1xuXG5pbXBvcnQgU3RvcmUgZnJvbSBcIkBjbTRhbGwtaW1wZXgvc3RvcmVcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1Zy5kZWZhdWx0KFwid3AuaW1wZXguZGFzaGJvYXJkLmltcG9ydFwiKTtcbmRlYnVnKFwibG9hZGVkXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbXBvcnQoKSB7XG4gIC8vIEBUT0RPOiBhZGQgZHJhZ24gZHJvcCBzdXBwb3J0IGZvciB1cGxvYWRpbmcgYW4gZXhwb3J0ID9cbiAgLy8gaHR0cHM6Ly9tZWRpdW0uY29tL0A2NTBlZ29yL3NpbXBsZS1kcmFnLWFuZC1kcm9wLWZpbGUtdXBsb2FkLWluLXJlYWN0LTJjYjQwOWQ4ODkyOVxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRGF0YVRyYW5zZmVySXRlbS9nZXRBc0ZpbGVTeXN0ZW1IYW5kbGVcbiAgLy8gaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby9maWxlLXN5c3RlbS1hY2Nlc3MvI2RyYWctYW5kLWRyb3BcblxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSBkYXRhLnVzZVNlbGVjdCgoc2VsZWN0KSA9PiAoe1xuICAgIGN1cnJlbnRVc2VyOiBzZWxlY3QoXCJjb3JlXCIpLmdldEN1cnJlbnRVc2VyKCksXG4gIH0pKTtcblxuICBjb25zdCB7IHNldHRpbmdzLCBpbXBvcnRQcm9maWxlcywgaW1wb3J0cyB9ID0gZGF0YS51c2VTZWxlY3QoKHNlbGVjdCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gc2VsZWN0KFN0b3JlLktFWSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNldHRpbmdzOiBzdG9yZS5nZXRTZXR0aW5ncygpLFxuICAgICAgaW1wb3J0UHJvZmlsZXM6IHN0b3JlLmdldEltcG9ydFByb2ZpbGVzKCksXG4gICAgICBpbXBvcnRzOiBzdG9yZS5nZXRJbXBvcnRzKCksXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgeyBjcmVhdGVJbXBvcnQsIHVwZGF0ZUltcG9ydCwgZGVsZXRlSW1wb3J0LCBjb25zdW1lSW1wb3J0IH0gPVxuICAgIGRhdGEudXNlRGlzcGF0Y2goU3RvcmUuS0VZIC8qLCBbXSovKTtcblxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IGVsZW1lbnQudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gZWxlbWVudC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBzY3JlZW5Db250ZXh0ID0gdXNlU2NyZWVuQ29udGV4dCgpO1xuXG4gIGNvbnN0IFtpbXBvcnRQcm9maWxlLCBzZXRJbXBvcnRQcm9maWxlXSA9IGVsZW1lbnQudXNlU3RhdGUoKTtcblxuICBjb25zdCBpbXBvcnRQcm9maWxlU2VsZWN0UmVmID0gZWxlbWVudC51c2VSZWYoKTtcblxuICBjb25zdCBfc2V0SW1wb3J0UHJvZmlsZSA9IChpbXBvcnRQcm9maWxlTmFtZSA9IG51bGwpID0+IHtcbiAgICBjb25zdCBpbXBvcnRQcm9maWxlID0gaW1wb3J0UHJvZmlsZXMuZmluZChcbiAgICAgIChfKSA9PiBfLm5hbWUgPT09IGltcG9ydFByb2ZpbGVOYW1lXG4gICAgKTtcbiAgICBzZXRJbXBvcnRQcm9maWxlKGltcG9ydFByb2ZpbGUpO1xuICAgIGltcG9ydFByb2ZpbGVTZWxlY3RSZWYuY3VycmVudC50aXRsZSA9IGltcG9ydFByb2ZpbGU/LmRlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGVsZW1lbnQudXNlRWZmZWN0KCgpID0+IHtcbiAgICBfc2V0SW1wb3J0UHJvZmlsZShpbXBvcnRQcm9maWxlcz8uWzBdPy5uYW1lKTtcbiAgfSwgW2ltcG9ydFByb2ZpbGVzXSk7XG5cbiAgY29uc3Qgb25Db25zdW1lSW1wb3J0ID0gYXN5bmMgKF9pbXBvcnQpID0+IHtcbiAgICBkZWJ1ZyhcIm9uQ29uc3VtZUltcG9ydCglbylcIiwgX2ltcG9ydCk7XG5cbiAgICBzZXRQcm9ncmVzcyh7XG4gICAgICBjb21wb25lbnQ6IChcbiAgICAgICAgPGNvbXBvbmVudHMuTW9kYWxcbiAgICAgICAgICB0aXRsZT17X18oXCJJbXBvcnRpbmcgZGF0YSBpbnRvIFdvcmRQcmVzcyAuLi5cIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHt9fVxuICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJibG9ja2luZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cHJvZ3Jlc3MgaW5kZXRlcm1pbmF0ZT1cInRydWVcIj48L3Byb2dyZXNzPlxuICAgICAgICA8L2NvbXBvbmVudHMuTW9kYWw+XG4gICAgICApLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgY29uc3VtZUltcG9ydChfaW1wb3J0LmlkLCB7fSwgbnVsbCwgbnVsbCk7XG4gICAgc2V0UHJvZ3Jlc3MoKTtcbiAgfTtcblxuICBjb25zdCBfZ2V0U2xpY2VGaWxlcyA9IGFzeW5jIChpbXBvcnREaXJIYW5kbGUpID0+IHtcbiAgICBjb25zdCBzbGljZXMgPSBbXTtcbiAgICBmb3IgYXdhaXQgKGxldCBzbGljZUNodW5rRGlyZWN0b3J5SGFuZGxlIG9mIGltcG9ydERpckhhbmRsZS52YWx1ZXMoKSkge1xuICAgICAgaWYgKHNsaWNlQ2h1bmtEaXJlY3RvcnlIYW5kbGUua2luZCA9PT0gXCJkaXJlY3RvcnlcIikge1xuICAgICAgICBmb3IgYXdhaXQgKGxldCBzbGljZUZpbGVIYW5kbGUgb2Ygc2xpY2VDaHVua0RpcmVjdG9yeUhhbmRsZS52YWx1ZXMoKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNsaWNlRmlsZUhhbmRsZS5raW5kID09PSBcImZpbGVcIiAmJlxuICAgICAgICAgICAgc2xpY2VGaWxlSGFuZGxlLm5hbWUubWF0Y2goL15zbGljZS1cXGQrXFwuanNvbiQvKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2xpY2VzLnB1c2goe1xuICAgICAgICAgICAgICBmaWxlSGFuZGxlOiBzbGljZUZpbGVIYW5kbGUsXG4gICAgICAgICAgICAgIGRpckhhbmRsZTogc2xpY2VDaHVua0RpcmVjdG9yeUhhbmRsZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNsaWNlcy5zb3J0KChsLCByKSA9PiB7XG4gICAgICBjb25zdCBjdmFsID0gbC5kaXJIYW5kbGUubmFtZS5sb2NhbGVDb21wYXJlKHIuZGlySGFuZGxlLm5hbWUpO1xuXG4gICAgICBpZiAoY3ZhbCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbC5maWxlSGFuZGxlLm5hbWUubG9jYWxlQ29tcGFyZShyLmZpbGVIYW5kbGUubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdmFsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNsaWNlcztcbiAgfTtcblxuICBjb25zdCBvblVwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgaW1wb3J0RGlySGFuZGxlID0gbnVsbDtcbiAgICAvLyBzaG93RGlyZWN0b3J5UGlja2VyIHdpbGwgdGhyb3cgYSBET01FeHhjZXB0aW9uIGluIGNhc2UgdGhlIHVzZXIgcHJlc3NlZCBjYW5jZWxcbiAgICB0cnkge1xuICAgICAgLy8gc2VlIGh0dHBzOi8vd2ViLmRldi9maWxlLXN5c3RlbS1hY2Nlc3MvXG4gICAgICBpbXBvcnREaXJIYW5kbGUgPSBhd2FpdCB3aW5kb3cuc2hvd0RpcmVjdG9yeVBpY2tlcih7XG4gICAgICAgIC8vIFlvdSBjYW4gc3VnZ2VzdCBhIGRlZmF1bHQgc3RhcnQgZGlyZWN0b3J5IGJ5IHBhc3NpbmcgYSBzdGFydEluIHByb3BlcnR5IHRvIHRoZSBzaG93U2F2ZUZpbGVQaWNrZXJcbiAgICAgICAgc3RhcnRJbjogXCJkb3dubG9hZHNcIixcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlYnVnKFwidXBsb2FkIGV4cG9ydCAlb1wiLCBpbXBvcnREaXJIYW5kbGUubmFtZSk7XG5cbiAgICBjb25zdCBkYXRlID0gc2NyZWVuQ29udGV4dC5jdXJyZW50RGF0ZVN0cmluZygpO1xuICAgIGNvbnN0IG5hbWUgPSBpbXBvcnREaXJIYW5kbGUubmFtZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGBJbXBvcnQgJyR7aW1wb3J0RGlySGFuZGxlLm5hbWV9JyBjcmVhdGVkIGJ5IHVzZXIgJyR7Y3VycmVudFVzZXIubmFtZX0nIGF0ICR7ZGF0ZX1gO1xuXG4gICAgc2V0UHJvZ3Jlc3Moe1xuICAgICAgY29tcG9uZW50OiAoXG4gICAgICAgIDxjb21wb25lbnRzLk1vZGFsXG4gICAgICAgICAgdGl0bGU9e19fKFwiVXBsb2FkaW5nIHNuYXBzaG90XCIsIFwiY200YWxsLXdwLWltcGV4XCIpfVxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7fX1cbiAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPVwiYmxvY2tpbmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHByb2dyZXNzIGluZGV0ZXJtaW5hdGU9XCJ0cnVlXCI+PC9wcm9ncmVzcz5cbiAgICAgICAgPC9jb21wb25lbnRzLk1vZGFsPlxuICAgICAgKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IF9pbXBvcnQgPSAoYXdhaXQgY3JlYXRlSW1wb3J0KG5hbWUsIGRlc2NyaXB0aW9uLCBpbXBvcnRQcm9maWxlLCBbXSkpXG4gICAgICAucGF5bG9hZDtcblxuICAgIGNvbnN0IHNsaWNlRmlsZXMgPSBhd2FpdCBfZ2V0U2xpY2VGaWxlcyhpbXBvcnREaXJIYW5kbGUpO1xuXG4gICAgY29uc3QgcGF0aCA9IGAke3NldHRpbmdzLmJhc2VfdXJpfS9pbXBvcnQvJHtfaW1wb3J0LmlkfS9zbGljZWA7XG5cbiAgICBjb25zdCBzbGljZVVwbG9hZHMgPSBzbGljZUZpbGVzLm1hcChcbiAgICAgIGFzeW5jICh7IGZpbGVIYW5kbGUsIGRpckhhbmRsZSB9LCBwb3NpdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBsZXQgc2xpY2UgPSBKU09OLnBhcnNlKGF3YWl0IChhd2FpdCBmaWxlSGFuZGxlLmdldEZpbGUoKSkudGV4dCgpKTtcblxuICAgICAgICBzbGljZSA9IGF3YWl0IGhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgICAgICBJbXBleEZpbHRlcnMuU0xJQ0VfUkVTVF9VUExPQUQsXG4gICAgICAgICAgSW1wZXhGaWx0ZXJzLk5BTUVTUEFDRSxcbiAgICAgICAgICBzbGljZSxcbiAgICAgICAgICBwYXJzZUludChmaWxlSGFuZGxlLm5hbWUubWF0Y2goL15zbGljZS0oXFxkKylcXC5qc29uJC8pWzFdKSxcbiAgICAgICAgICBkaXJIYW5kbGUsXG4gICAgICAgICAgZm9ybURhdGFcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoc2xpY2UpIHtcbiAgICAgICAgICBkZWJ1ZyhcInVwbG9hZCAlb1wiLCB7XG4gICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgIGZpbGU6IGZpbGVIYW5kbGUubmFtZSxcbiAgICAgICAgICAgIGRpcjogZGlySGFuZGxlLm5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwic2xpY2VcIiwgSlNPTi5zdHJpbmdpZnkoc2xpY2UsIG51bGwsIFwiICBcIikpO1xuXG4gICAgICAgICAgcmV0dXJuIGFwaUZldGNoKHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBwYXRoOiB1cmwuYWRkUXVlcnlBcmdzKHBhdGgsIHsgcG9zaXRpb24gfSksXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcblxuICAgICAgICAgICAgcGFyc2U6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IGZpbmlzaGVkID0gYXdhaXQgUHJvbWlzZS5hbGwoc2xpY2VVcGxvYWRzKTtcbiAgICBzZXRQcm9ncmVzcygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxjb21wb25lbnRzLlBhbmVsXG4gICAgICAgIGNsYXNzTmFtZT1cImltcG9ydFwiXG4gICAgICAgIGhlYWRlcj17X18oXCJJbXBvcnRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICA+XG4gICAgICAgIDxjb21wb25lbnRzLlBhbmVsQm9keVxuICAgICAgICAgIHRpdGxlPXtfXyhcIlVwbG9hZCBzbmFwc2hvdCB0byBXb3JkcHJlc3NcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgb3BlbmVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwidXBsb2FkLWltcG9ydC1mb3JtXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx3cC5jb21wb25lbnRzLlNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgIHJlZj17aW1wb3J0UHJvZmlsZVNlbGVjdFJlZn1cbiAgICAgICAgICAgIGRpc2FibGVkPXshaW1wb3J0UHJvZmlsZXMubGVuZ3RofVxuICAgICAgICAgICAgbGFiZWw9e19fKFwiSW1wb3J0IFByb2ZpbGVcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgICB2YWx1ZT17aW1wb3J0UHJvZmlsZT8ubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoaW1wb3J0UHJvZmlsZU5hbWUpID0+XG4gICAgICAgICAgICAgIF9zZXRJbXBvcnRQcm9maWxlKGltcG9ydFByb2ZpbGVOYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogX18oXCJTZWxlY3QgYW4gSW1wb3J0IHByb2ZpbGVcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC4uLmltcG9ydFByb2ZpbGVzLFxuICAgICAgICAgICAgXS5tYXAoKF8pID0+ICh7XG4gICAgICAgICAgICAgIHZhbHVlOiBfLmRpc2FibGVkID8gdW5kZWZpbmVkIDogXy5uYW1lLFxuICAgICAgICAgICAgICBsYWJlbDogXy5uYW1lLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogXy5kaXNhYmxlZCxcbiAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAgIGhlbHA9e19fKFxuICAgICAgICAgICAgICBcIkltcG9ydCBwcm9maWxlcyBkZWZpbmUgd2hpY2ggV29yZFByZXNzIGRhdGEgc2hvdWxkIGJlIGNvbnN1bWVkIGZyb20gdGhlIHNuYXBzaG90XCIsXG4gICAgICAgICAgICAgIFwiY200YWxsLXdwLWltcGV4XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPjwvd3AuY29tcG9uZW50cy5TZWxlY3RDb250cm9sPlxuICAgICAgICAgIDxjb21wb25lbnRzLkJ1dHRvblxuICAgICAgICAgICAgaXNQcmltYXJ5XG4gICAgICAgICAgICBvbkNsaWNrPXtvblVwbG9hZH1cbiAgICAgICAgICAgIGljb249e3VwbG9hZH1cbiAgICAgICAgICAgIGRpc2FibGVkPXshaW1wb3J0UHJvZmlsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7X18oXCJVcGxvYWQgc25hcHNob3RcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIil9XG4gICAgICAgICAgPC9jb21wb25lbnRzLkJ1dHRvbj5cbiAgICAgICAgPC9jb21wb25lbnRzLlBhbmVsQm9keT5cbiAgICAgICAge2ltcG9ydHMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxjb21wb25lbnRzLlBhbmVsQm9keVxuICAgICAgICAgICAga2V5PXtfLmlkfVxuICAgICAgICAgICAgdGl0bGU9e18ubmFtZX1cbiAgICAgICAgICAgIGluaXRpYWxPcGVuPXtpbmRleCA9PT0gMH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y29tcG9uZW50cy5QYW5lbFJvdz5cbiAgICAgICAgICAgICAgPGNvbXBvbmVudHMuQnV0dG9uXG4gICAgICAgICAgICAgICAgaXNEZXN0cnVjdGl2ZVxuICAgICAgICAgICAgICAgIGlzUHJpbWFyeVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ29uc3VtZUltcG9ydChfKX1cbiAgICAgICAgICAgICAgICBpY29uPXtjbG91ZFVwbG9hZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtfXyhcIkltcG9ydCB1cGxvYWRlZCBzbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX1cbiAgICAgICAgICAgICAgPC9jb21wb25lbnRzLkJ1dHRvbj5cbiAgICAgICAgICAgICAgPGNvbXBvbmVudHMuRHJvcGRvd25NZW51XG4gICAgICAgICAgICAgICAgLy8gaWNvbj17bW9yZVZlcnRpY2FsfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXyhcbiAgICAgICAgICAgICAgICAgIFwiQWRkaXRpb25hbCBhY3Rpb25zIG9uIHRoaXMgaW1wb3J0XCIsXG4gICAgICAgICAgICAgICAgICBcImNtNGFsbC13cC1pbXBleFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBjb250cm9scz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogX18oXCJFZGl0XCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBlZGl0LFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUmVuYW1lTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX18oXCJFZGl0IGltcG9ydCBzbmFwc2hvdFwiLCBcImNtNGFsbC13cC1pbXBleFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgZG9TYXZlKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVJbXBvcnQoXy5pZCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IF8sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF9fKFwiRGVsZXRlXCIsIFwiY200YWxsLXdwLWltcGV4XCIpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBjYW5jZWxDaXJjbGVGaWxsZWQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBEZWxldGVNb2RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfXyhcIkRlbGV0ZSBpbXBvcnRcIiwgXCJjbTRhbGwtd3AtaW1wZXhcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfXyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHJlYWxseSBzdXJlIHRvIGRlbGV0ZSBpbXBvcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbTRhbGwtd3AtaW1wZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPntfLm5hbWV9PC9jb2RlPj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgZG9EZWxldGUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlSW1wb3J0KF8uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvY29tcG9uZW50cy5QYW5lbFJvdz5cbiAgICAgICAgICAgIDxjb21wb25lbnRzLlBhbmVsUm93PlxuICAgICAgICAgICAgICA8cHJlIHN0eWxlPXt7IG92ZXJmbG93OiBcImF1dG9cIiB9fT5cbiAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoXywgbnVsbCwgXCIgIFwiKX1cbiAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICA8L2NvbXBvbmVudHMuUGFuZWxSb3c+XG4gICAgICAgICAgPC9jb21wb25lbnRzLlBhbmVsQm9keT5cbiAgICAgICAgKSl9XG4gICAgICA8L2NvbXBvbmVudHMuUGFuZWw+XG4gICAgICB7bW9kYWwgJiYgPG1vZGFsLmNvbXBvbmVudCB7Li4ubW9kYWwucHJvcHN9IG9uUmVxdWVzdENsb3NlPXtzZXRNb2RhbH0gLz59XG5cbiAgICAgIHtwcm9ncmVzcyAmJiAoXG4gICAgICAgIDxjb21wb25lbnRzLkZpbGwgbmFtZT1cInByb2dyZXNzXCIgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHt9fT5cbiAgICAgICAgICB7cHJvZ3Jlc3MuY29tcG9uZW50fVxuICAgICAgICA8L2NvbXBvbmVudHMuRmlsbD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IGVsZW1lbnQgZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuaW1wb3J0IGNvbXBvbmVudHMgZnJvbSBcIkB3b3JkcHJlc3MvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgX18sIHNwcmludGYgfSBmcm9tIFwiQHdvcmRwcmVzcy9pMThuXCI7XG5pbXBvcnQgRGVidWcgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZGVidWdcIjtcblxuaW1wb3J0IEV4cG9ydCBmcm9tIFwiLi9leHBvcnQubWpzXCI7XG5pbXBvcnQgSW1wb3J0IGZyb20gXCIuL2ltcG9ydC5tanNcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1Zy5kZWZhdWx0KFwid3AuaW1wZXguZGFzaGJvYXJkLnNjcmVlblwiKTtcbmRlYnVnKFwibG9hZGVkXCIpO1xuXG5jb25zdCBpc0ZpbGV5c3RlbUFwaUF2YWlsYWJsZSA9XG4gIHR5cGVvZiB3aW5kb3cuc2hvd0RpcmVjdG9yeVBpY2tlciA9PT0gXCJmdW5jdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57X18oXCJJbXBleFwiLCBcImNtNGFsbC13cC1pbXBleFwiKX08L2gxPlxuXG4gICAgICA8Y29tcG9uZW50cy5TbG90RmlsbFByb3ZpZGVyPlxuICAgICAgICA8Y29tcG9uZW50cy5GbGV4IGRpcmVjdGlvbj1cInJvd1wiIGFsaWduPVwidG9wXCI+XG4gICAgICAgICAgPGNvbXBvbmVudHMuRmxleEl0ZW0gaXNCbG9jaz5cbiAgICAgICAgICAgIDxFeHBvcnQgLz5cbiAgICAgICAgICA8L2NvbXBvbmVudHMuRmxleEl0ZW0+XG5cbiAgICAgICAgICA8Y29tcG9uZW50cy5GbGV4SXRlbSBpc0Jsb2NrPlxuICAgICAgICAgICAgPEltcG9ydCAvPlxuICAgICAgICAgIDwvY29tcG9uZW50cy5GbGV4SXRlbT5cbiAgICAgICAgPC9jb21wb25lbnRzLkZsZXg+XG5cbiAgICAgICAgPGNvbXBvbmVudHMuU2xvdCBuYW1lPVwicHJvZ3Jlc3NcIiAvPlxuXG4gICAgICAgIHshaXNGaWxleXN0ZW1BcGlBdmFpbGFibGUgJiYgKFxuICAgICAgICAgIDxjb21wb25lbnRzLk1vZGFsXG4gICAgICAgICAgICB0aXRsZT1cIk91Y2ggLSB5b3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgRmlsZSBTeXN0ZW0gQWNjZXNzIEFQSSA6LShcIlxuICAgICAgICAgICAgaXNEaXNtaXNzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEltcEV4IEltcG9ydCAvIEV4cG9ydCByZXF1aXJlcyBhIGJyb3dzZXIgaW1wbGVtZW50aW5nIHRoZXtcIiBcIn1cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2ViLmRldi9maWxlLXN5c3RlbS1hY2Nlc3MvXCI+XG4gICAgICAgICAgICAgICAgRmlsZSBTeXN0ZW0gQWNjZXNzIEFQSVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBDdXJyZW50bHkgb25seSBDaHJvbWl1bSBiYXNlZCBicm93c2VycyBsaWtlIENocm9tZSwgQ2hyb21pdW0sIE1TXG4gICAgICAgICAgICAgIEVkZ2UgYXJlIGtub3duIHRvIHN1cHBvcnQgdGhpcyBmZWF0dXJlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFNlZXtcIiBcIn1cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY2FuaXVzZS5jb20vbWRuLWFwaV93aW5kb3dfc2hvd2RpcmVjdG9yeXBpY2tlclwiPlxuICAgICAgICAgICAgICAgIGhlcmVcbiAgICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgICAgdG8gZmluZCB0aGUgbGF0ZXN0IGxpc3Qgb2YgYnJvd3NlcnMgc3VwcG9ydGluZyB0aGV7XCIgXCJ9XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dlYi5kZXYvZmlsZS1zeXN0ZW0tYWNjZXNzL1wiPlxuICAgICAgICAgICAgICAgIEZpbGUgU3lzdGVtIEFjY2VzcyBBUElcbiAgICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgICAgZmVhdHVyZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2NvbXBvbmVudHMuTW9kYWw+XG4gICAgICAgICl9XG4gICAgICA8L2NvbXBvbmVudHMuU2xvdEZpbGxQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgZWxlbWVudCBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5pbXBvcnQgRGVidWcgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZGVidWdcIjtcblxuaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9jb21wb25lbnRzL3NjcmVlbi5tanNcIjtcbmltcG9ydCB7IFNjcmVlbkNvbnRleHRQcm92aWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2NyZWVuLWNvbnRleHQubWpzXCI7XG5cbmltcG9ydCBcIi4vd3AuaW1wZXguZGFzaGJvYXJkLnNjc3NcIjtcblxuY29uc3QgZGVidWcgPSBEZWJ1Zy5kZWZhdWx0KFwid3AuaW1wZXguZGFzaGJvYXJkXCIpO1xuZGVidWcoXCJsb2FkZWRcIik7XG5cbi8vIHJlbmRlciBpbXBleCBkYXNoYm9hcmQgb25seSBpZiBub3QgZXJyb3Igbm90aWNlICg9PiB3b3JkcHJlc3MgaW1wb3J0ZXIgcGx1Z2luIGlzIG5vdCBpbnN0YWxsZWQpIGlzIHNob3duXG5pZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90aWNlLm5vdGljZS1lcnJvclwiKSkge1xuICBlbGVtZW50LnJlbmRlcihcbiAgICA8U2NyZWVuQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPFNjcmVlbiAvPlxuICAgIDwvU2NyZWVuQ29udGV4dFByb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNtNGFsbF93cF9pbXBleF93cF9hZG1pbl9kYXNoYm9hcmRcIilcbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQU9BLE1BQUMsWUFBWTtBQUNaO0FBRUEsWUFBSSxTQUFTLEdBQUc7QUFFaEIsOEJBQXNCO0FBQ3JCLGNBQUksVUFBVTtBQUVkLG1CQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQzFDLGdCQUFJLE1BQU0sVUFBVTtBQUNwQixnQkFBSSxDQUFDO0FBQUs7QUFFVixnQkFBSSxVQUFVLE9BQU87QUFFckIsZ0JBQUksWUFBWSxZQUFZLFlBQVksVUFB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
