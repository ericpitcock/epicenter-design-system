import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'clip-rule': 'evenodd', 'd': 'M7.99884 9H8.00781H7.99884Z', 'fill': 'currentColor', 'fill-rule': 'evenodd' })
const _hoisted3 = h('path', { 'd': 'M7.99884 9H8.00781', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15 7.5C14.5 8 14 9 14 9.49999C14.445 9.05496 14.9891 8.98307 15.5 9C16.1371 9.02111 16.7225 9.22252 17 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8 14C8.91212 15.2144 10.3643 16 12 16C13.6357 16 15.0879 15.2144 16 14M13.5 16L14.2348 17.3203C14.644 17.9703 15.5502 18.1929 16.2589 17.8177C16.9676 17.4424 17.2104 16.6113 16.8012 15.9614L16 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Wink',
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
            _hoisted5
        ])
    }
})
