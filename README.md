# 基于Pnpm+Changesets的Monorepo工具库实战

# 背景

***

由于公司多条业务线，各条业务线的前端开发相对隔离，在不同的前端组之间资源不互通，这就导致啦许多功能类似的工具函数、业务组件重复开发，变相浪费人力，在这样的背景下，我们就考虑是否就可以把重复的功能统一开发、维护、发不成npm包，在不同的项目中引入这些包，减少不必要的开发提高开发效率，在另一方便，我们也考虑到这些重复功能的多样性，有js方法，vue指令，还有各种业务组件，各种业务组件可能还又依赖不同的js方法vue指令，在这样的复杂的需求背景下，我们采用Monorepo，而不是Multirepo的方式进行代码仓库管理

# 技术准备

***
1.`Monorepo` 和 `Multirepo(Polyrepo)` 的区别？

`Monorepo` 和 `Multirepo` 是软件开发中代码管理的两个不同策略。当我们使用 Git 进行项目代码的版本控制时，那么 Monorepo 与 Multirepo 的定义表述如下：

- Monorepo，使用一个 Git 仓库管理项目相关的多个 模块/包/功能/应用。
- Multirepo（又称为Polyrepo），使用多个 Git 仓库分别管理项目的每一个模块/包/功能/应用。

![区别](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/689b8606b12b4839a6b9ee55d4427a24~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=824&h=280&s=142767&e=png&b=ffffff)

现代前端开源项目中很多采用了Monorepo的方式进行代码管理，如Babel、Vite等，感兴趣的可以去github上研究一下他们的源码，这里不在赘述。

# 2.如何搭建Monorepo项目

如今，在前端社区有 `Lerna、Pnpm Workspaces、Yarn Workspaces、Nx、Rush Stack`等工具进行Monorepo项目的搭建。我们主要调研了Lerna和Pnpm两种工具，最后选择Pnpm Workspaces的方式搭建Monorepo项目。放弃Lerna的原因有如下几点：

-`Lerna` 已经不再维护，后续有任何问题社区无法及时响应

- `Pnpm`装包效率更高，并且可以节约更多磁盘空间
- `Pnpm`本身就预置了对Monorepo的支持，不需要再额外第三方包的支持

# 3.什么是Pnpm？

Pnpm 代表 `performant npm`（高性能的npm），同 npm 和 Yarn 一样，都属于`Javascript`包管理安装工具，它较 npm 和 Yarn 在性能上得到很大提升，被称为快速的，节省磁盘空间的包管理工具。Pnpm 还内置支持了 Workspace 功能，能帮助我们更轻松完成包之间的 link 和 build，更好管理 `Monorepo` 项目。
更多详细了解，可以前往 [Npm](https://www.npmjs.com/) 官网 查看。

# 4.[Changesets](https://github.com/changesets/changesets) 简介

Changesets 是一个用于 Monorepo 项目下版本以及 Changelog 文件管理的工具。它是 Pnpm 推荐的两个开源版本控制工具之一（另一个是rush）。Changesets 会根据当前分支基于主分支的变化，筛选出需要变更的包，然后开发者可以根据实际场景更新包版本（遵循 semver 规范），填写 Changelog 信息，最后发布变更的包。

# 项目搭建

<span style="color: red;">注意：请先确保电脑环境中已安装pnpm，版本>7.0，接下来我们都会使用pnpm进行操作</span>

现在让我们一步步进行Monorepo项目的搭建，首先我们初始化项目，项目目录结构如下：

```go

pnpm-monorepo-example
├── LICENSE
├── package.json
├── packages
|  ├── pkga
|  |  ├── index.ts
|  |  └── package.json
|  ├── pkgb
|  |  ├── index.ts
|  |  └── package.json
|  └── pkgc
|     ├── index.ts
|     └── package.json

```

package.json 文件内容：

```json
{
  "name": "pnpm-monorepo-example",
  "version": "0.0.0",
  "private": true,
  "description": "A monorepo example with pnpm and changesets.",
  "scripts": {
    "build": "pnpm -r --filter=./packages/* run build"
  },
  "packageManager": "pnpm@7.18.0",
  "license": "MIT"
}


 ```

为了防止根目录被发布出去，需要设置工程根目录下 package.json 配置文件的 private 字段为 true。

在 packages 目录下，我们放了 pkga、pkgb、pkgc 三个子包。

pkga/index.ts 文件内容：

```typescript
export const isEven = (x: number) => x % 2 === 0



 ```

pkga/package.json 文件内容：

```perl

{
  "name": "@monorepoproject/pkga",
  "version": "0.0.0",
  "main": "dist/index.js",
  "files": [
    "dist"
  ],
  "devDependencies": {
    "rimraf": "^3.0.2",
    "typescript": "^5.1.6"
  },
  "scripts": {
    "watch": "tsc index.ts --outDir dist --watch",
    "build": "rimraf dist && tsc index.ts --outDir dist",
    "prepublish": "pnpm run build"
  },
  "publishConfig": {
    "access": "public"
  }
}



 ```

我们将 pkga 作为 pkgb 的依赖项引入。 pkgb/index.ts 文件内容：

```typescript
import { isEven } from '@monorepoproject/pkga'

export const isOdd = (x: number) => !isEven(x)




 ```

pkgb/package.json 文件内容：

```perl

{
  "name": "@monorepoproject/pkgb",
  "version": "0.0.0",
  "main": "dist/index.js",
  "files": [
    "dist"
  ],
  "dependencies": {
    "@monorepoproject/pkga": "^0.0.0"
  },
  "devDependencies": {
    "rimraf": "^3.0.2",
    "typescript": "^5.1.6"
  },
  "scripts": {
    "watch": "tsc index.ts --outDir dist --watch",
    "build": "rimraf dist && tsc index.ts --outDir dist",
    "prepublish": "pnpm run build"
  },
  "publishConfig": {
    "access": "public"
  }
}




 ```

pkgc 目录内容与 pkga 内容类似： pkgc/index.ts 文件内容：

```typescript
export const add = (a: number, b: number) => a + b;
export const substract = (a: number, b: number) => a - b




 ```

pkgc/package.json 文件内容：

```perl

{
  "name": "@monorepoproject/pkgc",
  "version": "0.0.0",
  "main": "dist/index.js",
  "files": [
    "dist"
  ],
  "devDependencies": {
    "rimraf": "^3.0.2",
    "typescript": "^5.1.6"
  },
  "scripts": {
    "watch": "tsc index.ts --outDir dist --watch",
    "build": "rimraf dist && tsc index.ts --outDir dist",
    "prepublish": "pnpm run build"
  },
  "publishConfig": {
    "access": "public"
  }
}

 ```

# pnpm安装&管理依赖

***
项目的基本目录和内容已经搭建完毕，接下来我们会使用 pnpm 来安装和管理依赖。

# 创建 worksapce

我们在项目根目录下添加`pnpm-workspace.yaml` 文件：

```vbnet

packages:
  - 'packages/*'


```

在 pnpm-workspace.yaml 里面我们声明了 packages 目录下的子目录都会被加入到 workspace 中，那么 `pnpm` 将根据会在 `workspace` 中子包的依赖关系，`自动链接这些子包。`比如上述的例子会将 pkga@0.0.0 链接到 pkgb。我们在项目根目录执行 pnpm install 看一下效果：

![对比图](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3558cb645017418695daeb73647f3562~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=310&h=513&s=15370&e=png&b=ede7d4)

我们查看 pkgb 的 node_modules 目录，可以看到 pkga 已经link到 pkgb 下了。

> 思考一下软链接的脚本？

- 在子包`@monorepoproject/pkgb`中使用 `pnpm link @monorepoproject/pkga` 自动添加版本号 例如：`"@serescnn/pkga": "^0.0.0"` 按照 `@serescnn/pkga` `version:0.0.0`安装

- 在根目录里使用 `pnpm install @monorepoproject/pkga@workspace --filter @monorepoproject/pkgb` 指定版本号`workspace:0.2.0` 那么`"@serescnn/pkga": "^0.2.0"`

- 在根目录里使用 `pnpm install @monorepoproject/pkga --filter @monorepoproject/pkgb` 不指定版本号，取最新版本 例如：`"@serescnn/pkga": "workspace:^"`

- 在根目录里使用 `pnpm install @monorepoproject/pkga@ --filter @monorepoproject/pkgb` 不指定版本号，取最新版本 例如： `"@serescnn/pkga": "^0.2.1"`

插图

# pnpm 安装依赖

搭建项目时，我们在项目根目录和各个pkg目录下的package.json里都已经指定了依赖项，通过`pnpm install`指令就可以安装依赖。但在实际开发过程中，如果需要再添加新的依赖项时，我们应该怎么操作呢？下面我就介绍几个常用的安装场景：

1. 全局的公共依赖包，如 typescript、eslint、prettier等，可以通过 -w、--workspace-root参数来安装。

```bash
# 全局安装typescript
pnpm install typescript -w

# 全局安装开发依赖eslint
pnpm install eslint -wD


```

3. 给某个特定的 package 安装依赖，可以通过 --filter 参数来安装。

```bash
pnpm add dayjs --filter @monorepoproject/pkgb


```

注意 --filter 后面的参数，这里跟着的是 package 下 package.json 的 name 名，而不是目录名。
3. 模块之间进行相互依赖，比如我们要把 pkgb 作为 pkgc 的依赖。

```bash

pnpm add @monorepoproject/pkgb -r --filter @monorepoproject/pkgc

```

# 构建package

依赖安装好之后，我们就可以对子包进行构建了。之前我们在index.ts里添加的内容，就是我们构建的目标。

我们在项目根目录下执行 pnpm run build 来对 packages 目录下的每个子包进行构建：
![packages](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f0ebb0a4dec4d28bebebe8187747597~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=507&h=228&s=13013&e=png&b=fdf6e3)

我们注意观察一下构建输出的log，pkga 和 pkgc 先执行 build 命令，等他们执行完成后，pkgb 再执行 build。为什么在根目录下执行 build 指令就会这样呢？我们来看一下根目录下 package.json 的 build 命令`：pnpm -r --filter=./packages/* run build`，`-r 代表着为 workspace 中的子包执行 build 命令`。
默认情况下，pnpm 会根据子包的依赖拓扑排序，按顺序对子包执行命令，以避免在构建某个包的时候，出现子依赖的构建产物未生成的问题，进而引发比如类型错误等问题。另外如果两个子包没有依赖关系，pnpm 会并发进行构建。
假如我们想要对 workspace 下某个子包单独进行构建，比如 pkgc，那我们可以这样来执行指令：`pnpm -r --filter=./packages/pkgc run build`。

# release工作流程

***

# 安装和初始化 changesets

在项目根目录下执行`pnpm i -Dw @changesets/cli`，安装 changesets完毕后，我们执行`pnpm changeset init` 快速初始化 changesets，在根目录下会生成 .changeset 目录，其中 config.json 文件是 changesets 的配置文件。

> 注意：.changeset 文件夹不能被git忽略，需要一起提交到git上！

# 发布第一个版本

在项目中，pkga、pkgb、pkgc 三个包的版本号都是 0.0.0，接着我们来为三个包发布第一个版本。首先，对我们的项目代码进行 git 仓库的初始化，并提交第一个commit。然后我们在项目的根目录下直接运行 pnpm changeset publish 为三个包发布第一个版本。发布完成后，我们就完成了 monorepo 项目的初始化。
注意，在这一步的时候，在终端可能会提示这样的错误：

![版本1](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54cb8b282a1e4454b1d6c13572f05a14~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=983&h=294&s=38433&e=png&b=fdf6e3)

遇到这样的情况，实际上是 npm 中没有创建一个`Organization`，自行前往 npm 官网，登录账号后，创建一个 Organization，名字和 package.json 的 name 中 @xxx 保持一致，比如，项目示例中，name 是 @monorepoproject/pkga，那我们就取名 `monorepoproject`，然后重新发布就好。

发布成功后，我们在 npm 官网上就可以看到刚刚发布的包了。
![版本2](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fdc579e66eea4eb5bfc97f3f4b34c1d2~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=826&h=472&s=43485&e=png&b=fbfafa)

# 版本进行迭代

假设我们版本即将进行迭代，我们从主分支上切一个 release/0.1.0 分支出来，然后在 pkga 中再添加一个功能，并提交git记录。 pkga/index.ts

```typescript

```

```typescript
export const isEven = (x: number) => x % 2 === 0
<!-- 新增一个方法 -->
export const typeOf = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()

```

这个时候 pkga 代码发生变更了，我们需要发一个版本给用户使用。这时候我们在项目根目录下执行以下命令来选择要发布的包以及包的版本类型（major、minor、patch，严格遵循 semver 规范）。

```bash
pnpm changeset

```

changeset 会通过 git diff 和构建依赖图来获得要发布的包。我们选择发布 pkga：

![版本3](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1b3fffcfecb4497b30930d5aefccf50~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=400&h=128&s=7673&e=png&b=fcf5e2)

我们选择发布 minor 版本，并填写 summary：

![版本4](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b0b2ef2d900410cab07fbb0bb77f691~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=608&h=329&s=33329&e=png&b=fdf6e3)

完成之后，我们会在 .changeset 目录下生成了一个命名随机的 changeset 文件：

![版本5](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3723d858fc154ac085f601acbdb57f56~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=567&h=148&s=10039&e=png&b=f1ebd7)

这个文件的本质是对包的版本和 Changelog 做一个预存储，我们也可以在这些文件中修改信息。随着不同开发者进行开发迭代积累，changeset 可能会有多个的，而且它们需要一并提交到远程仓库中的。在后面的包发布后，这些 changeset 文件是会被自动消耗掉的。

# 发布测试版本

正常情况下，我们可能会发一些测试版本，来看看功能是不是正常，此时我们就可以使用 changeset 的 Prerelease 功能来发布。

通过执行 `pnpm changeset pre enter <tag>` 命令进入先进入 pre 模式。

```bash
pnpm changeset pre enter alpha   # 发布 alpha 版本
pnpm changeset pre enter beta    # 发布 beta 版本
pnpm changeset pre enter rc      # 发布 rc 版本

```

这里，我们试试发布 alpha 版本。进入 pre 模式后，执行 `pnpm changeset version`修改包的版本：

![版本6](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0494057b8afc4eb5888ea6648e500ce7~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=736&h=219&s=17438&e=png&b=fbf3de)
![版本7](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3110de78af524700b0d194a29f47e4c3~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=809&h=249&s=18814&e=png&b=faf2dd)
我们可以看到，在 package.json 中，版本号修改成了 0.1.0-beta.0，同时，pkgb 中，对 pkga 的依赖版本也同时进行了修改。
版本修改完毕之后，执行 pnpm run build 进行包的构建，再执行 `pnpm changeset publish` 进行 alpha 版本的发布。

![版本8](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86d866b8b34f4c95a8f6f16dc1cd88d3~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=832&h=374&s=42162&e=png&b=fdf6e3)

发布成功之后，我们通过 `pnpm changeset pre exit` 退出 pre 模式。
这时，我们需要把变更的内容提交到远程仓库中，一方面，便于后面查看每次测试版本发布的变更记录；另一方面，changesets 默认不会到 npm 中查找当前包最新的测试包版本号并自动加1，它是根据当前仓库的测试包版本号再往上递增生成新的版本号。

# 发布正式版本

测试版本验证完毕之后，我们执行 `pnpm changeset version` 把测试版本号修改成正式版本号。这个时候，可以看到，之前在 .changeset 目录下生成的 changeset 文件被使用掉了，各个包的版本号也进行了修改。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45a3cd1589254050be5cd3d0123f3742~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=326&h=261&s=6550&e=png&b=ffffff)
然后执行 `pnpm changeset publish` 发布正式版本。changeset 会检查当前工作区中所有包的版本是否已经被发布过，如果没有则自动发布。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e25db9ac49324d87b2f1c11d618710de~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=815&h=267&s=31769&e=png&b=fdf6e3)
在 npm 上我们可以看到版本进行了更新。
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5109168426c649eeb3e7f01ae5d0213e~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=653&h=435&s=29694&e=png&b=fefcfc)

# 新增一个 pkg 包

***
在release工作流程中，我们完整体验了一下 package 的发布流程，但是这与我们实际应用相差还比较远，真实的应用场景中，我们的 package 不是简单的一个js文件。接下来，我们将在我们的 monorepo 项目中添加一个新的 package。

# 新建一个 vite 项目

首先我们通过 vite 脚手架去搭建一个项目。我们在 packages 目录下执行以下命令：

```sql
npm create vite@latest

```
也可以通过一下安装脚手架：

```bash 

pnpm dlx create-react-app packages/app1 --template typescript


pnpm create vite@latest packages --template typescript

```

按照下图选项来设置：
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76c8ac6ecf334cf68a1fadb1db174c3f~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=454&h=258&s=9883&e=png&b=fdf6e3)

创建成功后，我们调整一下文件名：

```yaml

src => example
lib/main.ts => lib/index.ts
lib => src
main.d.ts => index.d.ts

```

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2aed121871424eeaa3738c84ea7a5f7f~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=325&h=254&s=7182&e=png&b=eee8d5)

对下面的文件内容做出修改：

因为目录名发生了调整，所以对 script 的引入路径做出调整 index.html：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite App</title>
</head>

<body>
  <div id="app"></div>
  <script type="module" src="/example/main.ts"></script>
</body>

</html>

 ```

 我们需要调整 pacakge 的name为 `@monorepoproject/pkgd` package.json：

 ```json
 {
  "name": "@monorepoproject/pkgd",
  "version": "0.0.0",
  "type": "module",
  "files": [
    "dist",
    "index.d.ts"
  ],
  "main": "./dist/pkgd.umd.cjs",
  "module": "./dist/pkgd.js",
  "types": "./dist/index.d.ts",
  "exports": {
    "types": "./dist/index.d.ts",
    "import": "./dist/pkgd.js",
    "require": "./dist/pkgd.umd.cjs"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build"
  },
  "devDependencies": {
    "typescript": "^5.1.3",
    "vite": "^4.3.9",
    "vite-plugin-dts": "^3.3.1"
  },
  "publishConfig": {
    "access": "public"
  }
}

 ```

 tsconfig.json会提示报错，修改tsconfig.json tsconfig.json：

 ```json  
 {
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    /* Bundler mode */
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": [
    "src"
  ],
  "exclude": [
    "**/*.spec.ts",
    "**/*.test.ts"
  ]
}

 ```

 脚手架初始化的项目，构建不会生成 *.d.ts 文件，我们添加 `vite-plugin-dts` 插件来生成。

在这个配置中，我们打包出来的文件同时支持 `cjs、umd 和 esm。`

vite.config.ts：

```javascript
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
 build: {
  lib: {
   entry: './src/index.ts',
   name: 'Pkgd',
   fileName: 'pkgd',
   formats: ['es', 'umd', 'cjs'],
  },
  copyPublicDir: false,
 },
 plugins: [dts()],
})

```

pkg 目录和文件内容修改完毕后，我们执行 `pnpm install` 安装依赖。

# 构建和发布

同上，我们通过` pnpm run build `命令进行构建，构建完毕后，我们通过 `pnpm changeset publish` 进行第一个版本的发布。这样，我们就在 monorepo 的项目中添加好了一个 package，后续版本迭代和开发，我们就可以参考上文中 release工作流程。

# 单元测试

***

在前端项目中，单元测试必不可少，它能够帮助开发人员提早发现问题并解决问题，确保代码功能能够如预期一样进行工作。常用的测试框架有 jest、mocha等。在这里，我们使用 vitest 进行单元测试。

# vitest 简介（[官网](https://cn.vitest.dev/)）

Vitest 是由 Vite 提供支持的极速单元测试框架，与 Jest 兼容，并由 esbuild 提供支持开箱即用的 ESM、Typescript 和 JSX 支持。它使用 Vite 开发服务器在测试期间转换您的文件并监听您的应用程序的相同配置（通过vite.config.js），从而消除使用 Jest 等测试替代方案所涉及的重复

# 引入 vitest

执行以下命令安装依赖

```bash
pnpm install -Dw vitest @vitest/coverage-istanbul @vitest/ui typescript vite

```

在根目录下添加以下内容：

1. test文件夹，用了存放test.js
2. alias.ts, 定义包的别名，方便在test.js中引入

```typescript

import { resolve } from 'node:path'

function r(p: string) {
  return resolve(__dirname, p)
}

export const alias: Record<string, string> = {
  '@monorepoproject/pkga': r('./packages/pkga/'),
  '@monorepoproject/pkgb': r('./packages/pkgb/'),
  '@monorepoproject/pkgc': r('./packages/pkgc/'),
  '@monorepoproject/pkgd': r('./packages/pkgd/src/')
}



```

3. vitest.config.ts，vitest的配置文件

```javascript
import { defineConfig } from 'vitest/config'
import { alias } from './alias'
export default defineConfig({
  optimizeDeps: {
    entries: []
  },
  resolve: {
    alias
  },
  test: {
    include: ['test/**/*.test.ts', 'test/**/*.spec.ts'],
    coverage: {
      provider: 'istanbul', // or 'v8'
      reportOnFailure: true,
      reporter: ['html', 'json'],
      reportsDirectory: './html/coverage'
    },
    reporters: ['html']
  }
})


```

在这个配置文件中，我们配置了 package 的别名、需要执行的test脚本、代码覆盖率报告以及测试报告。更多字段的解释可以去 vitest 官网上查看。

4. vitest.workspace.ts，支持 monorepo 的工作区配置文件

```javascript

import { defineWorkspace } from 'vitest/config'
export default defineWorkspace(['vitest.config.ts'])

```

5. tsconfig.json

```json
{
    "compilerOptions": {
        "declaration": true,
        "noImplicitAny": false,
        "removeComments": true,
        "noLib": false,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "target": "es6",
        "sourceMap": true,
        "module": "commonjs",
        "jsx": "preserve",
        "strict": true,
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "lib": [
            "dom",
            "dom.iterable",
            "esnext",
            "webworker"
        ],
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "isolatedModules": true
    },
    "exclude": [
        "node_modules",
        "**/*/lib",
        "**/*/dist",
        "test"
    ],
    "references": []
}

```

6. 在package.json中添加执行指令：vitest run 和 vitest --ui --coverage

```json
{
...,
"scripts": {
    "build": "pnpm -r --filter=./packages/* run build",
    "test": "vitest run", // 执行测试，生成测试报告
    "test:report": "vitest --ui --coverage" // 执行测试，生成测试报告和代码覆盖率报告，并自动以html形式打开
  },
...
}

 ```

# 安装需要测试的包

在编写测试文件之前，我们需要把要测试的 packages 引入进来，由于 pnpm-workspace.yaml 的存在，引入的时候，实际上是添加了软连接。

执行以下指令安装依赖：

```bash

pnpm install -Dw @monorepoproject/pkga @monorepoproject/pkgb @monorepoproject/pkgc @monorepoproject/pkgd 


```

我们可以看到，安装的包实际上是指向了 packages 目录下的包。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f03dc0e86ef443a91f6f039adbe5a6a~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=475&h=218&s=11572&e=png&b=fcf5e2)

编写测试文件

在 test 目录下添加 a.test.ts 和 d.test.ts

a.test.ts：

```javascript
import {test, expect} from 'vitest'
import {isEven} from '@monorepoproject/pkga'

test('1 is not even', () => {
 expect(isEven(1)).toBe(false)
})


```

d.test.ts：

```javascript
import {test, expect} from 'vitest'
import {isEmail} from '@monorepoproject/pkgd'

test('1 is not email', () => {
 expect(isEmail('1')).toBe(false)
})

test('abc@qq.com is email', () => {
 expect(isEmail('abc@qq.com')).toBe(true)
})


```

# 执行测试

1. `pnpm run test`, 执行完毕后，会在根目录下生成一个 html 文件夹，通过执行 npx vite preview --outDir html 可以在浏览器中预览测试报告。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5dee0c717cbc4204bdb6e5a3a795e36d~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=551&h=148&s=7049&e=png&b=fcf5e2)

2. `pnpm run test:report`, 执行完毕后，会在根目录下生成一个 html 文件夹，同时自动在浏览器打开一个页面，查看测试报告以及代码覆盖率。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c16d6cbec5064b668e7fcc2163abe19c~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=579&h=153&s=7724&e=png&b=fdf6e3)

到这里，我们就完整的走过了单元测试的流程，如果需要对vue组件进行组件测试，那么 vite 对`@vue/test-utils` 也是支持的。

# Eslint + Prettier （可选）

***

在前端项目中，Eslint 和 Prettier 非常常见，Eslint 对代码格式进行校验，Preitter 对代码进行美化。这对团队开发的项目来说，有助于保持代码风格统一，降低维护难度。

我们通过执行以下指令安装所需依赖：

```bash
pnpm add -Dw eslint babel-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-config-prettier-standard eslint-config-standard eslint-plugin-flowtype eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-standard prettier prettier-config-standard


```

在项目根目录下添加以下文件：

.eslintrc 文件，对于代码校验的配置

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "prettier-standard"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "no-use-before-define": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "import/no-anonymous-default-export": [
      "error",
      {
        "allowArrowFunction": true,
        "allowAnonymousFunction": true
      }
    ]
  }
}


```

.eslintignore 文件，设置部分目录和文件跳过 eslint 检查

```bash


*/**.js
*/**.d.ts
packages/*/dist
packages/*/lib
packages/*/html
html
docs


```

.prettierrc 文件

```arduino
"prettier-config-standard"


```

.prettierignore文件

```bash
packages/*/dist
packages/*/lib
packages/*/html
html
docs

```

package.json 文件中添加指令：

```json
"scripts": {
    "build": "pnpm -r --filter=./packages/* run build",
    "test": "vitest run", 
    "test:report": "vitest --ui --coverage",
    "prettier": "prettier --check ./",
    "prettier:fix": "prettier --write ./",
    "lint": "eslint . --ext .ts",
    "lint:fix": "npm run lint --fix"
  },
```

Eslint 和 Preitter 的配置可以根据自己的喜好和项目实际情况来配置，更多详细信息可以参考 [Eslint](https://eslint.org/) 官网 和 [Preitter](https://prettier.io/docs/en/) 官网。

# 集成 [Vitepress](https://vitepress.dev/guide/getting-started) 生成文档

<span style="color: red;">本项目最终的目的是开发一个 Monorepo 的 工具库，那么为了方便使用工具库的开发人员使用，文档是必不可少。在这里，我们采用 vitepress 生成文档。</span>

# 初始化文档

在根目录下新建 docs 目录，cd docs 进入到docs目录下，执行以下指令，生成文档：

```bash
npx vitepress init

 ```

 接着在终端会出现一些提示，根据我们项目的情况去设置：

 ![文档](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e41517f5b526453ba700b8676f011e10~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=684&h=444&s=15066&e=png&b=fdf6e3)
结束之后，我们会发现 docs 目录下会多出这些文件：
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8bf895aa7b044489a18b1fe1211849b~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=434&h=167&s=5471&e=png&b=ede7d4)

# 安装依赖

我们还需要在 docs 目录下安装 vitepress 依赖项：

```bash
 npm i vitepress
```

开发&部署文档
我们回到项目根目录下，添加文档启动命令：

```json


"scripts": {
    "build": "pnpm -r --filter=./packages/* run build",
    "test": "vitest run", 
    "test:report": "vitest --ui --coverage",
    "prettier": "prettier --check ./",
    "prettier:fix": "prettier --write ./",
    "lint": "eslint . --ext .ts",
    "lint:fix": "npm run lint --fix",
    "docs:dev": "pnpm -r --filter=./docs run docs:dev", // 文档开发
    "docs:build": "pnpm -r --filter=./docs run docs:build", // 文档构建
    "docs:preview": "pnpm -r --filter=./docs run docs:preview" // 文档预览
  },


```
> -r 就是递归去执行所有包下的 comand 命令

也可以： 

1. `"eject": "pnpm run -C packages/app1 eject && pnpm run -C packages/app2 start"`

-C 是指在指定的路径下执行命令而不是在当前目录

修改 pnpm-workspace.yaml 文件：

```yaml
packages:
  - 'packages/*'
  - 'docs'

```

在根目录下执行 pnpm run doc:dev，我们可以在浏览器看到一个静态网页，接着我们就可以进行文档的开发工作了。


![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a4bf3765aba4bbb8c94a3a46a700607~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=427&h=143&s=4147&e=png&b=fdf6e3)


如果需要部署，只要执行 pnpm run docs:build，然后部署到服务器上即可。

# 总结


目前为止，我们完成了 Monorepo 项目的搭建，并完整走过了 npm 包的新建、开发和发布流程，也在项目中集成了 unit test 和文档功能，基本能够满足实际的需求。但是本文中也有着一些待优化和解决的点：

1. 配置文件，如 tsconfig.json、vite.config.js 可以抽离出公共的配置文件。
2. 添加 husky ，统一代码提交规范。
3. 集成 CI/CD ，实现代码自动化部署和发布。
4. Eslint 和 Prettier 配置优化。
5. Vue 组件库开发。

这些需要我们更深一步的去探讨和研究！


# 结尾

1. 关于安装速度
通过 benchmarks可以看到很多情况下 pnpm 的安装速度要更胜一筹，这是因为 pnpm 和其他包管理器的安装方式不一样:
pnpm：每一个依赖都是单独地经历` resolve -> fetch -> write`， 并且所有依赖并行。
其他：所有依赖共同经历 `resolve -> fetch -> write`。
对于 pnpm, 最终的安装时间只取决于路径最长的那个依赖；对于其他包管理器来说每个阶段都要等待耗时最长的那个依赖的完成。举个例子，现在有 A 和 B 两个依赖, A 对应三个阶段的耗时分别是 1 2 3， B 对应三个阶段的耗时分别是 3 2 1 , 那么 pnpm 最终安装完成时间是：1 + 2 + 3 = 6 < 其他包管理器完成时间: 3 + 2 + 3 = 8。
2. 关于节省空间
因为 pnpm 默认所有依赖都放在磁盘的同一个地方，这些依赖可以被跨工程共享，所以说比较节省空间。这个其实 yarn 也支持， 使用 `enableGlobalCache:true` 就可以使用全局缓存，但是这样的话零安装就不能使用了, 一般不建议这么使用。
3. 关于运行时依赖查找速度
在运行时，pnpm 应该比不过 yarn, 因为 yarn 是通过 .pnp.cjs 直接告知 Node 依赖的位置(内部是重写了 require.resolve 方法)； 而 pnpm 中还是依靠 Node 层层查找，理论上会更慢。
