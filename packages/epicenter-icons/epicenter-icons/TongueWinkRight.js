import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'clip-rule': 'evenodd', 'd': 'M7.99884 9H8.00781H7.99884Z', 'fill': 'currentColor', 'fill-rule': 'evenodd' })
const _hoisted3 = h('path', { 'd': 'M7.99884 9H8.00781', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8 14C8.91212 15.2144 10.3643 16 12 16C13.6357 16 15.0879 15.2144 16 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10 16V17.5C10 18.6046 10.8954 19.5 12 19.5C13.1046 19.5 14 18.6046 14 17.5V16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M15 7.5C14.5 8 14 9 14 9.49999C14.445 9.05496 14.9891 8.98307 15.5 9C16.1371 9.02111 16.7225 9.22252 17 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TongueWinkRight',
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
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
