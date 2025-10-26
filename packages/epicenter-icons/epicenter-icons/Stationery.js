import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 7V4C5 3.44772 5.44772 3 6 3H7C7.55228 3 8 3.44772 8 4V7M5 7V19L6.5 21L8 19V7M5 7H8', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 19.9979C12 20.5502 12.4477 20.9979 13 20.9979H18C18.5523 20.9979 19 20.5502 19 19.9979V4C19 3.44771 18.5523 3 18 3H13C12.4477 3 12 3.44772 12 4V19.9979Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 16.4985L14.5 16.5M12 11.999L14.5 12M12 7.49951L14.5 7.50003', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Stationery',
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
