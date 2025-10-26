import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5569 20.5L5.44511 20.5C3.78825 20.5 2.43792 19.1509 2.50103 17.4952C2.79796 9.70545 4.20483 5.34067 4.9612 3.5207C5.23081 2.87197 5.87496 2.49999 6.57749 2.49999L16.4246 2.49997C17.1271 2.49997 17.7712 2.87195 18.0409 3.52068C18.6365 4.95386 19.6355 7.96514 20.1782 12.9843', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5011 6.48434C8.5011 8.1412 9.84424 9.48434 11.5011 9.48434C13.158 9.48434 14.5011 8.1412 14.5011 6.48434', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21.5011 16.5L16.5011 21.5L14.5011 19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShoppingBagCheck',
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
