import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 22V20L19.9985 17.6892C20.7056 16.2125 21.6732 13.3226 20.3211 11.9618C18.1895 9.81667 15.2082 9.42404 13.5 9.5V3.75C13.5 2.7835 12.7165 2 11.75 2C10.7835 2 10 2.7835 10 3.75V14L7.78341 11.6713C7.05938 11.0311 5.96519 11.1372 5.36948 11.9053C4.87385 12.5444 4.87719 13.4534 5.3775 14.0886L10 19.9973V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 4H17.6949M19 6L17 4L19 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 4H6.3408M5 2L7 4L5 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Resize01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
