import { defuFn } from 'defu'

console.log(defuFn({
  app: {
    ignore: (items: string[]) => items.filter(item => item.startsWith('.')),
    level: (value: number) => Math.max(0, Math.min(5, value)),
  },
},
{
  app: {
    ignore: ['node_modules', '.git', '.nuxt'],
    level: 90,
  },
}),
)
