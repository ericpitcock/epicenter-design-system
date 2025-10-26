import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 8.5L12 16.5M6 16.5L12 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18 11.5V16.5C18 16.5 17.483 16.5 16.5 16.5C15.1193 16.5 14 15.3807 14 14C14 12.6193 15.1193 11.5 16.5 11.5H18ZM18 11.5V8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AdobeXd',
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
