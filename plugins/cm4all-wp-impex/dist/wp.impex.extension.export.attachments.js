var wp = wp || {};
wp.impex = wp.impex || {};
wp.impex.extension = wp.impex.extension || {};
wp.impex.extension.export = wp.impex.extension.export || {};
wp.impex.extension.export.attachments = (() => {
  // esbuild-globals-plugin:@wordpress/hooks
  var hooks_default = window.wp.hooks;
  var { actions, addAction, addFilter, applyFilters, createHooks, currentAction, currentFilter, defaultHooks, didAction, didFilter, doAction, doingAction, doingFilter, filters, hasAction, hasFilter, removeAction, removeAllActions, removeAllFilters, removeFilter } = window.wp.hooks;

  // esbuild-globals-plugin:@cm4all-impex/debug
  var debug_default = window.wp.impex.debug;

  // esbuild-globals-plugin:@cm4all-impex/filters
  var filters_default = window.wp.impex.filters;

  // plugins/cm4all-wp-impex/src/wp.impex.extension.export.attachments.mjs
  var debug = debug_default.default("wp.impex.attachments");
  debug("huhu!");
  hooks_default.addFilter(filters_default.SLICE_REST_UNMARSHAL, filters_default.NAMESPACE, async function(namespace, slice, sliceIndex, chunkDirHandle) {
    if (slice["tag"] === "attachment" && slice["meta"]["entity"] === "attachment" && slice["type"] === "resource") {
      const _links_self = slice["_links"]?.["self"];
      if (_links_self) {
        for (const entry of _links_self) {
          const href = entry["href"];
          let path = href.split(/[\\/]/);
          const filename = `slice-${sliceIndex.toString().padStart(4, "0")}-` + path.pop();
          await fetch(href).then(async (response) => {
            attachmentFileHandle = await chunkDirHandle.getFileHandle(filename, {
              create: true
            });
            const writable = await attachmentFileHandle.createWritable();
            await response.body.pipeTo(writable);
          });
        }
      }
      delete slice["_links"];
    }
    return slice;
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXNidWlsZC1nbG9iYWxzLXBsdWdpbjpAd29yZHByZXNzL2hvb2tzIiwgImVzYnVpbGQtZ2xvYmFscy1wbHVnaW46QGNtNGFsbC1pbXBleC9kZWJ1ZyIsICJlc2J1aWxkLWdsb2JhbHMtcGx1Z2luOkBjbTRhbGwtaW1wZXgvZmlsdGVycyIsICIuLi9zcmMvd3AuaW1wZXguZXh0ZW5zaW9uLmV4cG9ydC5hdHRhY2htZW50cy5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBkZWZhdWx0IHdpbmRvdy53cC5ob29rcztcbmV4cG9ydCBjb25zdCB7IGFjdGlvbnMsIGFkZEFjdGlvbiwgYWRkRmlsdGVyLCBhcHBseUZpbHRlcnMsIGNyZWF0ZUhvb2tzLCBjdXJyZW50QWN0aW9uLCBjdXJyZW50RmlsdGVyLCBkZWZhdWx0SG9va3MsIGRpZEFjdGlvbiwgZGlkRmlsdGVyLCBkb0FjdGlvbiwgZG9pbmdBY3Rpb24sIGRvaW5nRmlsdGVyLCBmaWx0ZXJzLCBoYXNBY3Rpb24sIGhhc0ZpbHRlciwgcmVtb3ZlQWN0aW9uLCByZW1vdmVBbGxBY3Rpb25zLCByZW1vdmVBbGxGaWx0ZXJzLCByZW1vdmVGaWx0ZXIgfSA9IHdpbmRvdy53cC5ob29rczsiLCAiZXhwb3J0IGRlZmF1bHQgd2luZG93LndwLmltcGV4LmRlYnVnOyIsICJleHBvcnQgZGVmYXVsdCB3aW5kb3cud3AuaW1wZXguZmlsdGVyczsiLCAiaW1wb3J0IGhvb2tzIGZyb20gXCJAd29yZHByZXNzL2hvb2tzXCI7XG5pbXBvcnQgRGVidWcgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZGVidWdcIjtcbmltcG9ydCBJbXBleEZpbHRlcnMgZnJvbSBcIkBjbTRhbGwtaW1wZXgvZmlsdGVyc1wiO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnLmRlZmF1bHQoXCJ3cC5pbXBleC5hdHRhY2htZW50c1wiKTtcbmRlYnVnKFwiaHVodSFcIik7XG5cbmhvb2tzLmFkZEZpbHRlcihcbiAgSW1wZXhGaWx0ZXJzLlNMSUNFX1JFU1RfVU5NQVJTSEFMLFxuICBJbXBleEZpbHRlcnMuTkFNRVNQQUNFLFxuICBhc3luYyBmdW5jdGlvbiAobmFtZXNwYWNlLCBzbGljZSwgc2xpY2VJbmRleCwgY2h1bmtEaXJIYW5kbGUpIHtcbiAgICBpZiAoXG4gICAgICBzbGljZVtcInRhZ1wiXSA9PT0gXCJhdHRhY2htZW50XCIgJiZcbiAgICAgIHNsaWNlW1wibWV0YVwiXVtcImVudGl0eVwiXSA9PT0gXCJhdHRhY2htZW50XCIgJiZcbiAgICAgIHNsaWNlW1widHlwZVwiXSA9PT0gXCJyZXNvdXJjZVwiXG4gICAgKSB7XG4gICAgICBjb25zdCBfbGlua3Nfc2VsZiA9IHNsaWNlW1wiX2xpbmtzXCJdPy5bXCJzZWxmXCJdO1xuXG4gICAgICBpZiAoX2xpbmtzX3NlbGYpIHtcbiAgICAgICAgLy8gZG93bmxvYWQgYXR0YWNobWVudHMgdG8gbG9jYWwgZm9sZGVyXG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgX2xpbmtzX3NlbGYpIHtcbiAgICAgICAgICBjb25zdCBocmVmID0gZW50cnlbXCJocmVmXCJdO1xuXG4gICAgICAgICAgbGV0IHBhdGggPSBocmVmLnNwbGl0KC9bXFxcXC9dLyk7XG5cbiAgICAgICAgICBjb25zdCBmaWxlbmFtZSA9XG4gICAgICAgICAgICBgc2xpY2UtJHtzbGljZUluZGV4LnRvU3RyaW5nKCkucGFkU3RhcnQoNCwgXCIwXCIpfS1gICsgcGF0aC5wb3AoKTtcbiAgICAgICAgICAvL3BhdGgucHVzaChmaWxlbmFtZSk7XG4gICAgICAgICAgLy9wYXRoID0gcGF0aC5qb2luKFwiLy9cIik7XG5cbiAgICAgICAgICBhd2FpdCBmZXRjaChocmVmKS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgYXR0YWNobWVudEZpbGVIYW5kbGUgPSBhd2FpdCBjaHVua0RpckhhbmRsZS5nZXRGaWxlSGFuZGxlKFxuICAgICAgICAgICAgICBmaWxlbmFtZSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNyZWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB3cml0YWJsZSA9IGF3YWl0IGF0dGFjaG1lbnRGaWxlSGFuZGxlLmNyZWF0ZVdyaXRhYmxlKCk7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLmJvZHkucGlwZVRvKHdyaXRhYmxlKTtcblxuICAgICAgICAgICAgLy8gc2VlIGh0dHBzOi8vd2ViLmRldi9maWxlLXN5c3RlbS1hY2Nlc3MvXG4gICAgICAgICAgICAvLyA9PiBwaXBlVG8oKSBjbG9zZXMgdGhlIGRlc3RpbmF0aW9uIHBpcGUgYnkgZGVmYXVsdCwgbm8gbmVlZCB0byBjbG9zZSBpdC5cbiAgICAgICAgICAgIC8vIGF3YWl0IHdyaXRhYmxlLmNsb3NlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHNsaWNlW1wiX2xpbmtzXCJdO1xuICAgICAgLypcbiAgICAgIHNsaWNlWydfbGlua3MnXVsnc2VsZiddW10gPSBbXG4gICAgICAgICdocmVmJyA9PiBzbGljZVtJbXBleDo6U0xJQ0VfTUVUQV1bJ2RhdGEnXVsnZ3VpZCddLFxuICAgICAgICAndGFnJyAgPT4gQXR0YWNobWVudHNFeHBvcnRlcjo6U0xJQ0VfVEFHLFxuICAgICAgICAncHJvdmlkZXInICA9PiBBdHRhY2htZW50c0V4cG9ydGVyOjpQUk9WSURFUl9OQU1FLFxuICAgICAgXTtcbiAgICAgICovXG4gICAgfVxuXG4gICAgcmV0dXJuIHNsaWNlO1xuICB9LFxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7OztBQUFBLE1BQU8sZ0JBQVEsT0FBTyxHQUFHO0FBQ2xCLE1BQU0sRUFBRSxTQUFTLFdBQVcsV0FBVyxjQUFjLGFBQWEsZUFBZSxlQUFlLGNBQWMsV0FBVyxXQUFXLFVBQVUsYUFBYSxhQUFhLFNBQVMsV0FBVyxXQUFXLGNBQWMsa0JBQWtCLGtCQUFrQixpQkFBaUIsT0FBTyxHQUFHOzs7QUNEM1IsTUFBTyxnQkFBUSxPQUFPLEdBQUcsTUFBTTs7O0FDQS9CLE1BQU8sa0JBQVEsT0FBTyxHQUFHLE1BQU07OztBQ0kvQixNQUFNLFFBQVEsY0FBTSxRQUFRO0FBQzVCLFFBQU07QUFFTixnQkFBTSxVQUNKLGdCQUFhLHNCQUNiLGdCQUFhLFdBQ2IsZUFBZ0IsV0FBVyxPQUFPLFlBQVksZ0JBQWdCO0FBQzVELFFBQ0UsTUFBTSxXQUFXLGdCQUNqQixNQUFNLFFBQVEsY0FBYyxnQkFDNUIsTUFBTSxZQUFZLFlBQ2xCO0FBQ0EsWUFBTSxjQUFjLE1BQU0sWUFBWTtBQUV0QyxVQUFJLGFBQWE7QUFFZixtQkFBVyxTQUFTLGFBQWE7QUFDL0IsZ0JBQU0sT0FBTyxNQUFNO0FBRW5CLGNBQUksT0FBTyxLQUFLLE1BQU07QUFFdEIsZ0JBQU0sV0FDSixTQUFTLFdBQVcsV0FBVyxTQUFTLEdBQUcsVUFBVSxLQUFLO0FBSTVELGdCQUFNLE1BQU0sTUFBTSxLQUFLLE9BQU8sYUFBYTtBQUN6QyxtQ0FBdUIsTUFBTSxlQUFlLGNBQzFDLFVBQ0E7QUFBQSxjQUNFLFFBQVE7QUFBQTtBQUdaLGtCQUFNLFdBQVcsTUFBTSxxQkFBcUI7QUFFNUMsa0JBQU0sU0FBUyxLQUFLLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFTakMsYUFBTyxNQUFNO0FBQUE7QUFVZixXQUFPO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
