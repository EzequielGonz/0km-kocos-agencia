# Graph Report - src-0km-kocos-agencia  (2026-11-22)

## Corpus Check
- 223 files · ~90,357 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: .css 6, .woff2 4, .ico 1)

## Summary
- 2060 nodes · 4769 edges · 114 communities (74 shown, 40 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 94 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- toolbar.js
- color-action.js
- theme.js
- cn
- edit-mode-script.js
- panel.js
- annotation-markers.js
- sidebar.tsx
- lucide-react
- api.server.ts
- react-router
- home.tsx
- devDependencies
- dependencies
- carousel.tsx
- draft.js
- react
- style-actions.js
- vite.config.ts
- edit-action.js
- article-page.tsx
- package.json
- vite-plugin-react-inline-editor.js
- use-toast.ts
- brand.ts
- session-journal-client.ts
- field.tsx
- +types/api.$.ts
- +types/api.health.ts
- home.ts
- +types/indexnow.txt.ts
- +types/robots.txt.ts
- seo-0km.ts
- seo-0km-slug.ts
- seo-financiacion.ts
- seo-financiacion-slug.ts
- seo-guias.ts
- seo-guias-slug.ts
- seo-simulador.ts
- +types/sitemap.xml.ts
- root.ts
- index.server.ts
- compilerOptions
- selection-rect.js
- components.json
- root.tsx
- selection-mode-metadata.js
- command.tsx
- marcas-modelos.server.ts
- class-variance-authority
- item.tsx
- menubar.tsx
- client.ts
- ast-utils.js
- source-writer.js
- input-group.tsx
- html-utils.js
- routes/robots.txt.ts
- chart.tsx
- breadcrumb.tsx
- routes/sitemap.xml.ts
- zonas.server.ts
- use-auth.ts
- vite-plugin-edit-mode.js
- drawer.tsx
- empty.tsx
- navigation-menu.tsx
- cero-km.server.ts
- vite-env.d.ts
- scripts
- sonner.tsx
- +routes.ts
- ruta-3d.tsx
- indexnow.mjs
- tailwindcss-animate
- vite-plugin-globals.d.ts
- eslint.unicode-escapes-formatter.mjs
- @radix-ui/react-aspect-ratio
- @radix-ui/react-collapsible
- pocketbase-auth-client.ts
- input-otp
- @radix-ui/react-accordion
- @radix-ui/react-checkbox
- @radix-ui/react-label
- @radix-ui/react-popover
- @radix-ui/react-progress
- @radix-ui/react-radio-group
- @radix-ui/react-select
- @radix-ui/react-switch
- @radix-ui/react-toast
- @radix-ui/react-tooltip
- react-day-picker
- react-hook-form
- react-resizable-panels
- @react-router/serve@^8.3.0
- recharts
- zod@^4.3.6
- iframe-route-restoration-client.ts
- allowedActionOrigins
- assets
- assetsBuildDirectory
- basename
- entry
- future
- isSpaMode
- prerender
- publicPath
- routeDiscovery
- routes
- ssr
- unstable_getCriticalCss
- bannerAttrs
- isDev

## God Nodes (most connected - your core abstractions)
1. `cn()` - 272 edges
2. `react` - 72 edges
3. `react-router` - 37 edges
4. `lucide-react` - 34 edges
5. `initColorAction()` - 32 edges
6. `hideAnnotationPanel()` - 30 edges
7. `handleClick()` - 29 edges
8. `showColorAction()` - 27 edges
9. `initToolbar()` - 27 edges
10. `disableEditMode()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `positionPanel()` --indirect_call--> `elementZIndex()`  [INFERRED]
  apps/web/plugins/visual-editor/ui/annotation-panel/panel.js → apps/web/plugins/visual-editor/utils/dom-utils.js
- `openOrCreateAnnotation()` --indirect_call--> `captureElementMetadata()`  [INFERRED]
  apps/web/plugins/visual-editor/ui/annotation-panel/panel.js → apps/web/plugins/visual-editor/utils/selection-mode-metadata.js
- `commitCurrentEdit()` --indirect_call--> `onSelectionChange()`  [INFERRED]
  apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js → apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js
- `startInlineEdit()` --indirect_call--> `onSelectionChange()`  [INFERRED]
  apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js → apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js
- `Page()` --calls--> `ArticlePage()`  [EXTRACTED]
  apps/web/src/routes/seo-0km.tsx → apps/web/src/components/articulo/article-page.tsx

## Import Cycles
- 2-file cycle: `apps/web/plugins/visual-editor/ui/annotation-panel/panel.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/annotation-panel/panel.js`
- 2-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js`
- 2-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js`
- 2-file cycle: `apps/web/plugins/visual-editor/ui/text-format/color-action/color-action.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/color-action/color-action.js`
- 2-file cycle: `apps/web/plugins/visual-editor/ui/text-format/font-family-action/font-family-action.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/font-family-action/font-family-action.js`
- 2-file cycle: `apps/web/plugins/visual-editor/ui/text-format/size-action/size-action.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/size-action/size-action.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/size-action/size-action.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/size-action/size-action.js -> apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/color-action/color-action.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/text-format/color-action/color-action.js -> apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/color-action/color-action.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/font-family-action/font-family-action.js -> apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/link-action/link-action.js -> apps/web/plugins/visual-editor/ui/text-format/dropdown-panel.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/annotation-panel/panel.js -> apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/annotation-panel/panel.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js`
- 3-file cycle: `apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/text-format/font-family-action/font-family-action.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js`
- 4-file cycle: `apps/web/plugins/visual-editor/ui/annotation-panel/panel.js -> apps/web/plugins/visual-editor/ui/inline-edit/edit-action.js -> apps/web/plugins/visual-editor/ui/inline-edit/cursor-styles.js -> apps/web/plugins/visual-editor/ui/text-format/toolbar/toolbar.js -> apps/web/plugins/visual-editor/ui/annotation-panel/panel.js`

## Communities (114 total, 40 thin omitted)

### Community 0 - "toolbar.js"
Cohesion: 0.05
Nodes (101): ANNOTATION_PANEL_ESTIMATED_HEIGHT, ANNOTATION_PANEL_WIDTH, DRAG_SELECT_THRESHOLD, MAX_ANNOTATION_ATTACHMENTS, MIN_SELECTION_CANDIDATE_SIZE, PANEL_GAP, PANEL_MARGIN, PARENT_TOOLBAR_HEIGHT (+93 more)

### Community 1 - "color-action.js"
Cohesion: 0.06
Nodes (96): applyColor(), applyColorAction(), applyGradientFull(), applyLive(), applySolidFull(), canApplyColor(), findGradientWrapper(), findReusableAncestor() (+88 more)

### Community 2 - "theme.js"
Cohesion: 0.06
Nodes (51): ASSISTED_EDIT_LABEL, ICON_ALIGN_LEFT, ICON_BOLD, ICON_CHEVRON_DOWN, ICON_CHEVRON_DOWN_SMALL, ICON_CLOSE, ICON_DELETE, ICON_IMAGE (+43 more)

### Community 3 - "cn"
Cohesion: 0.06
Nodes (53): AccordionContent, AccordionItem, AccordionTrigger, Avatar, AvatarFallback, AvatarImage, Card, CardContent (+45 more)

### Community 4 - "edit-mode-script.js"
Cohesion: 0.11
Nodes (59): isEditModeEnabled(), isInsideEditorUi(), beginDragSelect(), cancelDragSelect(), cancelImageEdit(), clearImageEdit(), clearMultiSelection(), disableEditMode() (+51 more)

### Community 5 - "panel.js"
Cohesion: 0.11
Nodes (53): _comments, _editorTranslations, getAnnotationClickX(), getAnnotationClickY(), getComments(), getEditingComment(), getEditorTranslations(), getPanelMode() (+45 more)

### Community 6 - "annotation-markers.js"
Cohesion: 0.11
Nodes (43): Z_OFFSET_MARKER, Z_OFFSET_TOOLTIP, addAnnotationMarker(), addRestoredAnnotationMarker(), captureAnchor(), clampX(), clampY(), createMarkerEntry() (+35 more)

### Community 7 - "sidebar.tsx"
Cohesion: 0.07
Nodes (36): SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle, sheetVariants (+28 more)

### Community 8 - "lucide-react"
Cohesion: 0.10
Nodes (34): Props, Field, Props, Values, FinalCta(), formas, Hero(), Field (+26 more)

### Community 9 - "api.server.ts"
Cohesion: 0.08
Nodes (36): ApiArgs, apiError(), ApiHandler, BODY_LIMIT_BYTES, json(), readBodyWithinLimit(), readFormData(), readJsonBody() (+28 more)

### Community 10 - "react-router"
Cohesion: 0.06
Nodes (29): virtual:react-router/server-build, parse(), pesos, PLAZOS, Simulador(), getPageData(), linksFor(), relatedFor() (+21 more)

### Community 11 - "home.tsx"
Cohesion: 0.11
Nodes (29): Faq(), questions, Movimiento(), pasos, Process(), ScrollReveal(), FIRM_NAME, SHARE_IMAGE_URL (+21 more)

### Community 12 - "devDependencies"
Cohesion: 0.06
Nodes (37): devDependencies, autoprefixer@^10.4.20, @babel/generator@^7.29.7, @babel/types@^7.29.7, esbuild@^0.28.1, eslint@^9.39.4, eslint-import-resolver-alias@^1.1.2, eslint-plugin-import@^2.32.0 (+29 more)

### Community 13 - "dependencies"
Cohesion: 0.05
Nodes (39): dependencies, class-variance-authority@^0.7.1, cmdk@^1.1.1, framer-motion@^11.15.0, @hookform/resolvers@^5.2.2, ipaddr.js@^1.9.1, lucide-react@^0.469.0, @radix-ui/react-avatar@^1.1.11 (+31 more)

### Community 14 - "carousel.tsx"
Cohesion: 0.08
Nodes (34): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle (+26 more)

### Community 15 - "draft.js"
Cohesion: 0.13
Nodes (32): discardAllEdits(), handleDraftDiscard(), handleDraftSave(), applyDraftSnapshot(), buildDraftSnapshot(), ChildMessage, ParentMessage, setComments() (+24 more)

### Community 16 - "react"
Cohesion: 0.08
Nodes (22): ButtonGroup(), ButtonGroupText(), buttonGroupVariants, Checkbox, HoverCardContent, Kbd(), KbdGroup(), PopoverContent (+14 more)

### Community 17 - "style-actions.js"
Cohesion: 0.14
Nodes (34): ancestorDepthWithin(), applyAlign(), applyBold(), applyItalic(), applyUnderline(), buildUnderlineWrapStyle(), findCssUnderlineAncestor(), findStyledAncestorWrappingRange() (+26 more)

### Community 18 - "vite.config.ts"
Cohesion: 0.10
Nodes (22): getTemplateBannerAttrs(), AllowedEditorOrigins, CLIENT_PATH, horizonsRuntimePlugin(), PLUGIN_DIR, CLIENT_PATH, formatEntry(), formatTime() (+14 more)

### Community 19 - "edit-action.js"
Cohesion: 0.15
Nodes (29): notifyDraftStateChanged(), handleImageEditSave(), clearEditing(), setEditing(), beginEditSession(), recordEdit(), applyEditingCaretColor(), buildStyleDiff() (+21 more)

### Community 20 - "article-page.tsx"
Cohesion: 0.16
Nodes (20): ArticlePage(), HubGroups(), LinkRows(), Props, Blocks(), ContactButtons(), DocHero(), Props (+12 more)

### Community 21 - "package.json"
Cohesion: 0.07
Nodes (28): clsx@^2.1.1, date-fns@^4.1.0, embla-carousel-react@^8.6.0, gsap@3.13.0, isbot@^5.2.1, @radix-ui/react-alert-dialog@^1.1.15, @radix-ui/react-context-menu@^2.2.16, @radix-ui/react-hover-card@^1.1.15 (+20 more)

### Community 22 - "vite-plugin-react-inline-editor.js"
Cohesion: 0.16
Nodes (20): generateSourceWithMap(), isSameOriginRequest(), renderEditedSource(), checkTagNameEditable(), EDITABLE_HTML_TAGS, evalChildComposition(), hasEditableAncestor(), hasMeaningfulTextContent() (+12 more)

### Community 23 - "use-toast.ts"
Cohesion: 0.13
Nodes (25): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+17 more)

### Community 24 - "brand.ts"
Cohesion: 0.11
Nodes (22): Enlace, enlaces, logo, WHATSAPP_URL, compra, ADDRESS, EMAIL, FACEBOOK_URL (+14 more)

### Community 25 - "session-journal-client.ts"
Cohesion: 0.15
Nodes (23): CODE_LIKE_ELEMENTS, create(), check(), isInsideCodeLikeElement(), compactText(), describeElement(), fieldLabel(), fieldValue() (+15 more)

### Community 26 - "field.tsx"
Cohesion: 0.11
Nodes (22): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSet() (+14 more)

### Community 27 - "+types/api.$.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 28 - "+types/api.health.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 29 - "home.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 30 - "+types/indexnow.txt.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 31 - "+types/robots.txt.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 32 - "seo-0km.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 33 - "seo-0km-slug.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 34 - "seo-financiacion.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 35 - "seo-financiacion-slug.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 36 - "seo-guias.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 37 - "seo-guias-slug.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 38 - "seo-simulador.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 39 - "+types/sitemap.xml.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 40 - "root.ts"
Cohesion: 0.08
Nodes (24): Annotations, Info, Matches, Module, Route, ActionArgs, ClientActionArgs, ClientLoaderArgs (+16 more)

### Community 41 - "index.server.ts"
Cohesion: 0.12
Nodes (21): base, financiacionGuias, financiacionPilar, base, guiaPages, simuladorPage, ALL, BY_PATH (+13 more)

### Community 42 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowJs, allowSyntheticDefaultImports, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, lib (+13 more)

### Community 43 - "selection-rect.js"
Cohesion: 0.15
Nodes (19): MAX_SELECTED_ELEMENTS, ACTIONABLE_SELECTOR, ANNOTATION_UI_SELECTOR, EDIT_TARGET_SELECTOR, ELEMENT_TYPE_MAP, ELEMENT_TYPE_TRANSLATIONS, FIXED_CONTEXT_SELECTOR, getEditId() (+11 more)

### Community 44 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 45 - "root.tsx"
Cohesion: 0.12
Nodes (4): VERIFICATION, HorizonsPreviewScripts(), viteVirtualSrc(), Layout()

### Community 46 - "selection-mode-metadata.js"
Cohesion: 0.24
Nodes (17): appendSvgContext(), appendTextContext(), buildCssSelector(), captureElementMetadata(), cloneElementContext(), cloneElementShell(), collectVisibleText(), contextAttributeEntries() (+9 more)

### Community 47 - "command.tsx"
Cohesion: 0.14
Nodes (15): Command, CommandDialog(), CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator (+7 more)

### Community 48 - "marcas-modelos.server.ts"
Cohesion: 0.14
Nodes (17): comoPagar(), Comparativa, comparativaPages, COMPARATIVAS, comparativaToPage(), Marca, marcaBySlug(), marcaPages (+9 more)

### Community 49 - "class-variance-authority"
Cohesion: 0.16
Nodes (13): Alert, AlertDescription, AlertTitle, alertVariants, Badge(), BadgeProps, badgeVariants, ToggleGroup (+5 more)

### Community 50 - "item.tsx"
Cohesion: 0.14
Nodes (16): ButtonGroupSeparator(), FieldSeparator(), Item(), ItemActions(), ItemContent(), ItemDescription(), ItemFooter(), ItemGroup() (+8 more)

### Community 51 - "menubar.tsx"
Cohesion: 0.12
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 52 - "client.ts"
Cohesion: 0.18
Nodes (12): DataRouter, describeRouterError(), firstAppStackFrame(), formatConsoleMessage(), formatRouterError(), getFilePathFromStack(), hasValidationCode(), isValidationFetchWarning() (+4 more)

### Community 53 - "ast-utils.js"
Cohesion: 0.20
Nodes (13): @babel/parser@^7.29.7, @babel/traverse@^7.29.7, COMPONENT_BLACKLIST, __dirname, extractCodeBlocks(), __filename, findJSXElementAtPosition(), generateCode() (+5 more)

### Community 54 - "source-writer.js"
Cohesion: 0.25
Nodes (13): VITE_PROJECT_ROOT, applyElementEdit(), buildChildrenFromText(), groupEditsByFile(), parseEditId(), parseHtmlAttributesToJsx(), parseStyleString(), setJsxAttribute() (+5 more)

### Community 55 - "input-group.tsx"
Cohesion: 0.21
Nodes (11): InputGroup(), InputGroupAddon(), inputGroupAddonVariants, InputGroupButton(), inputGroupButtonVariants, InputGroupInput(), InputGroupText(), InputGroupTextarea() (+3 more)

### Community 56 - "html-utils.js"
Cohesion: 0.21
Nodes (9): IMPORTANT_STYLES, buildCssSelector(), escapeHtml(), extractDOMContext(), getComputedStylesForElement(), HTML_TO_JSX_ATTRIBUTE_RENAME_MAP, isAtLineEnd(), nextNodeInFlow() (+1 more)

### Community 57 - "routes/robots.txt.ts"
Cohesion: 0.23
Nodes (10): SITE_URL, LOCAL_HOSTNAMES, publicOrigin(), siteOrigin(), loader(), AI_ANSWER_AGENTS, AI_TRAINING_AGENTS, loader() (+2 more)

### Community 58 - "chart.tsx"
Cohesion: 0.27
Nodes (10): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartStyle(), ChartTooltipContent, getPayloadConfigFromPayload() (+2 more)

### Community 59 - "breadcrumb.tsx"
Cohesion: 0.20
Nodes (9): @radix-ui/react-slot@^1.2.4, Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator() (+1 more)

### Community 60 - "routes/sitemap.xml.ts"
Cohesion: 0.31
Nodes (8): sitemapEntries(), escapeXml(), getDynamicEntries(), loader(), serializeSitemap(), SitemapEntry, STATIC_PATHS, toLoc()

### Community 61 - "zonas.server.ts"
Cohesion: 0.24
Nodes (9): lista(), recortar(), SEG, Zona, zonaPages, zonas, zonasCabaPaths, zonasGbaPaths (+1 more)

### Community 62 - "use-auth.ts"
Cohesion: 0.32
Nodes (3): pocketbase@^0.28.1, pocketbaseClient, pocketbase

### Community 63 - "vite-plugin-edit-mode.js"
Cohesion: 0.25
Nodes (4): EDIT_MODE_STYLES, __dirname, __filename, inlineEditDevPlugin()

### Community 64 - "drawer.tsx"
Cohesion: 0.29
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 65 - "empty.tsx"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 66 - "navigation-menu.tsx"
Cohesion: 0.32
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 67 - "cero-km.server.ts"
Cohesion: 0.29
Nodes (7): ceroKmPilar, recortar(), Segmento, segmentoPages, segmentos, segmentoSlugs, segmentoToPage()

### Community 68 - "vite-env.d.ts"
Cohesion: 0.25
Nodes (7): HorizonsBannerAttrs, virtual:horizons-banner, virtual:horizons-edit-mode, virtual:horizons-iframe-route-restoration, virtual:horizons-pocketbase-auth, virtual:horizons-runtime, virtual:session-journal-client

### Community 69 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, lint:warn, start, typecheck

### Community 70 - "sonner.tsx"
Cohesion: 0.33
Nodes (4): next-themes@^0.4.6, sonner@^2.0.7, next-themes, sonner

### Community 71 - "+routes.ts"
Cohesion: 0.33
Nodes (5): Pages, react-router, Register, RouteFiles, RouteModules

### Community 72 - "ruta-3d.tsx"
Cohesion: 0.50
Nodes (3): three@0.169.0, Ruta3D(), three

### Community 73 - "indexnow.mjs"
Cohesion: 0.40
Nodes (4): base, key, [origin, ...paths], urlList

## Knowledge Gaps
- **15 isolated node(s):** `assets`, `assetsBuildDirectory`, `basename`, `entry`, `future` (+10 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 666 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **40 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react-router` connect `react-router` to `lucide-react`, `home.tsx`, `dependencies`, `article-page.tsx`, `package.json`, `brand.ts`, `+types/api.$.ts`, `+types/api.health.ts`, `home.ts`, `+types/indexnow.txt.ts`, `+types/robots.txt.ts`, `seo-0km.ts`, `seo-0km-slug.ts`, `seo-financiacion.ts`, `seo-financiacion-slug.ts`, `seo-guias.ts`, `seo-guias-slug.ts`, `seo-simulador.ts`, `+types/sitemap.xml.ts`, `root.ts`, `root.tsx`, `use-auth.ts`, `+routes.ts`?**
  _High betweenness centrality (0.368) - this node is a cross-community bridge._
- **What connects `assets`, `assetsBuildDirectory`, `basename` to the rest of the system?**
  _15 weakly-connected nodes found - possible missing edges._
- **Should `toolbar.js` be split into smaller, more focused modules?**
  _Cohesion score 0.05325537294563843 - nodes in this community are weakly interconnected._
- **Why does `@babel/types` connect `vite-plugin-react-inline-editor.js` to `ast-utils.js`, `devDependencies`, `package.json`, `source-writer.js`?**
  _High betweenness centrality (0.255) - this node is a cross-community bridge._
- **Should `color-action.js` be split into smaller, more focused modules?**
  _Cohesion score 0.06282051282051282 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `cn`, `sidebar.tsx`, `lucide-react`, `react-router`, `home.tsx`, `dependencies`, `carousel.tsx`, `article-page.tsx`, `package.json`, `use-toast.ts`, `brand.ts`, `field.tsx`, `root.tsx`, `command.tsx`, `class-variance-authority`, `item.tsx`, `menubar.tsx`, `input-group.tsx`, `chart.tsx`, `breadcrumb.tsx`, `use-auth.ts`, `drawer.tsx`, `empty.tsx`, `navigation-menu.tsx`, `ruta-3d.tsx`?**
  _High betweenness centrality (0.162) - this node is a cross-community bridge._
- **Should `theme.js` be split into smaller, more focused modules?**
  _Cohesion score 0.06400409626216078 - nodes in this community are weakly interconnected._