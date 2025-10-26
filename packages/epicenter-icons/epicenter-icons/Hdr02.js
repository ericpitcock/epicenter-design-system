import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 22H5C3.89543 22 3 21.1046 3 20L3 4C3 2.89543 3.89543 2 5 2H12L19 9V11M18.5 9H13.998C12.8935 9 11.998 8.10457 11.998 7V2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 17V14H19.5C20.3284 14 21 14.6716 21 15.5C21 16.3284 20.3284 17 19.5 17M18 17V19M18 17H19.5M19.5 17L21 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.5 19V14H13.5C14.6046 14 15.5 14.8954 15.5 16V17C15.5 18.1046 14.6046 19 13.5 19H12.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 14V16.5M7 19V16.5M7 16.5H10M10 16.5V19M10 16.5V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Hdr02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
