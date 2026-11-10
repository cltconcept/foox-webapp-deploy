self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api\\/|healthz|_next\\/|assets\\/|icons\\/|sw\\.js|manifest\\.webmanifest|.*\\.(?:png|webp|svg|ico|jpg|json|txt)$).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!api/|healthz|_next/|assets/|icons/|sw\\.js|manifest\\.webmanifest|.*\\.(?:png|webp|svg|ico|jpg|json|txt)$).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()