
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components) {
    return {
        li: (props) => <li {...props} className="mt-2" />,
        h1: (props) => <h1 {...props} className="text-4xl font-bold mt-4 mb-2" />,
        h2: (props) => <h2 {...props} className="text-3xl font-bold mt-6 mb-2 text-blue" />,
        p: (props) => <p {...props} className="mt-2 mb-6" />,
        a: (props) => <a {...props} className="markdown_a dark:text-cyan-400" />,
        ...components,
    }
}