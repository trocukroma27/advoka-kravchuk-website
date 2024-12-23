export default defineAppConfig({
  ui: {
    primary: "coral-reef",
    gray: "stone",
    button: {
      base: "transition-colors",
      color: {
        gray: {
          ghost: "hover:bg-gray-200",
        },
      },
      variant: {
        ghost: "hover:bg-{color}-100",
      },
    },
    horizontalNavigation: {
      wrapper: "h-full justify-center w-auto",
      container: "h-full [&>*]:h-full",
      base: "transition-colors h-full",
      active: "text-primary-500",
      after: "after:h-[3px]",
      before: "",
    },
    verticalNavigation: {
      base: "transition-colors",
    },
    divider: {
      border: {
        base: "border-gray-200 dark:border-gray-700",
      },
    },
    breadcrumb: {
      wrapper:
        "px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-600 bg-opacity-70 dark:bg-opacity-70",
    },
    formGroup: {
      error: "mt-1",
      default: {
        size: "md",
      },
    },
  },
});
