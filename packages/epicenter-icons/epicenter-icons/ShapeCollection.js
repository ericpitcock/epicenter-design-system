import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.809 10H20.191C20.6378 10 21 9.63779 21 9.19098C21 9.06539 20.9708 8.94152 20.9146 8.82918L18.2236 3.44721C18.0866 3.17313 17.8064 3 17.5 3C17.1936 3 16.9134 3.17313 16.7764 3.44721L14.0854 8.82918C14.0292 8.94152 14 9.06539 14 9.19098C14 9.63779 14.3622 10 14.809 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '6.5', 'cy': '17.5', 'r': '3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.5 14.5L20 20M20.5 15V20.5H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShapeCollection',
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
