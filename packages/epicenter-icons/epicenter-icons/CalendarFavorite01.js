import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.8393 22L17.25 20.7037L19.6607 22L19.125 19.4074L21 17.5926L18.3836 17.3787L17.25 15L16.1164 17.3787L13.5 17.5926L15.375 19.4074L14.8393 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.5 2V6M7.5 2V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 14V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 10H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CalendarFavorite01',
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
