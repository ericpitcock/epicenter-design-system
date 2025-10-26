import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 17V15.5C18.5 14.6716 17.8284 14 17 14C16.1716 14 15.5 14.6716 15.5 15.5V17M14 17H20V22H14V17Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 22V19.9973L4.3775 14.0886C3.87719 13.4534 3.87385 12.5444 4.36948 11.9053C4.96519 11.1372 6.05938 11.0311 6.78341 11.6713L9 14V3.75C9 2.7835 9.7835 2 10.75 2C11.7165 2 12.5 2.7835 12.5 3.75V9.5C13.8768 9.43877 16.0806 9.78016 18 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TouchLocked01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
