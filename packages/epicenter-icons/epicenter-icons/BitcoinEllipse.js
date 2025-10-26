import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 2C6.47716 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 12H10M13 12C14.1046 12 15 11.1046 15 10C15 8.89543 14.1046 8 13 8H12M13 12C14.1046 12 15 12.8954 15 14C15 15.1046 14.1046 16 13 16H12M10 12V8M10 12V16M9 8H10M9 16H10M10 8H12M10 16H12M12 8V6.5M12 16V17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BitcoinEllipse',
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
