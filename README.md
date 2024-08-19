# Protocol Builder
A web app to build protocols

# Instructions about directory structure
https://docs.expo.dev/router/reference/src-directory/

# Instructions about publishing websites (e.g., static or single)
https://docs.expo.dev/distribution/publishing-websites/

# Instructions for configuring static publishing
https://docs.expo.dev/router/reference/static-rendering/

# Groups
Folders in ./app with names in parenthesis are known as groups.
Groups are special in that they are excluded from routes. That is:

 + ./app/(root)/home.tsx maps to /home
 + ./app/root/home.tsx maps to /root/home

https://docs.expo.dev/router/layouts/#groups
https://docs.expo.dev/develop/file-based-routing/#groups

# Layouts
The _layout.tsx file within a directory is a special file that controls
the look and feel for all pages/screens within the directory.

# Expo Router Special Files
The +html.tsx and +not-found.tsx are special and do not have explicit routes.
https://docs.expo.dev/develop/file-based-routing/#not-found-routes
https://docs.expo.dev/router/reference/static-rendering/#root-html

# Unit Testing
Expo supports unit testing via jest. A common pattern is to name a direcotry
\_\_test\_\_ and place all unittests inside this directory (though this is
not required).
https://docs.expo.dev/develop/unit-testing/

# Hooks
Hooks are special functions that add React functionality to custom components.
https://react.dev/reference/react/hooks
