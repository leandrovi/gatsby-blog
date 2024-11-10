import { Actions } from "gatsby";
import * as path from "path";

type OnCreateWebpackConfigArgs = {
  actions: Actions;
};

export const onCreateWebpackConfig = ({
  actions,
}: OnCreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  });
};
