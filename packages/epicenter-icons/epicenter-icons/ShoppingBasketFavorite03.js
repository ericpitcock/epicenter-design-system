import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.5 20H6.19425C5.21658 20 4.3822 19.2932 4.22147 18.3288L2.5 8H21.5L20.8333 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 12V16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 12V16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M22.5 8H1.5M15 3L17.7923 7.65377M9 3L6.20774 7.65377', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18.5 21C18.5 21 15 18.8824 15 16.8333C15 15.8208 15.7368 15 16.75 15C17.275 15 17.8 15.1765 18.5 15.8824C19.2 15.1765 19.725 15 20.25 15C21.2632 15 22 15.8208 22 16.8333C22 18.8824 18.5 21 18.5 21Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShoppingBasketFavorite03',
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
