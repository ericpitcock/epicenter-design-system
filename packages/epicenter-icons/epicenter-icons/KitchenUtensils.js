import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.502 14V3M12.502 14C10.844 14 9.5 15.4354 9.5 16.625C9.5 18.375 10.844 21 12.502 21C14.1598 21 15.5039 18.375 15.5039 16.625C15.5039 15.4354 14.1598 14 12.502 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.5 10V21M2.5 3L3.37735 9.14142C3.44772 9.63407 3.86964 10 4.3673 10H6.6327C7.13036 10 7.55228 9.63407 7.62265 9.14142L8.5 3H2.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 21V14M18.5 14V3C20.3253 3.60844 21.6232 5.23206 21.8147 7.14658L22.5 14H18.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'KitchenUtensils',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
