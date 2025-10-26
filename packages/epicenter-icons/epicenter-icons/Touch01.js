import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 22V20L18.9985 17.6892C19.7056 16.2125 20.6732 13.3226 19.3211 11.9618C17.1895 9.81667 14.2082 9.42404 12.5 9.5V3.75C12.5 2.7835 11.7165 2 10.75 2C9.7835 2 9 2.7835 9 3.75V14L6.78341 11.6713C6.05938 11.0311 4.96519 11.1372 4.36948 11.9053C3.87385 12.5444 3.87719 13.4534 4.3775 14.0886L9 19.9973V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Touch01',
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
