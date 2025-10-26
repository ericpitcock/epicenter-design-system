import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 18H20L17.6892 18.9985C16.2125 19.7056 13.3226 20.6732 11.9618 19.3211C9.81667 17.1895 9.42404 14.2082 9.5 12.5H3.75C2.7835 12.5 2 11.7165 2 10.75C2 9.7835 2.7835 9 3.75 9L14 9L11.6713 6.78341C11.0311 6.05938 11.1372 4.96519 11.9053 4.36948C12.5444 3.87385 13.4534 3.87719 14.0886 4.3775L19.9973 9H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HandPointingLeft01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
