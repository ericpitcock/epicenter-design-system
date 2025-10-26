import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 3C8.52241 5.66667 15.4776 5.66667 22 3V21C15.4776 18.3333 8.52241 18.3333 2 21V3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.5 19.5L14.8457 12.0328C15.5253 11.4248 16.53 11.3534 17.2887 11.8591L22 15' })
const _hoisted3 = h('path', { 'd': 'M9 10C9 10.8284 8.32843 11.5 7.5 11.5C6.67157 11.5 6 10.8284 6 10C6 9.17157 6.67157 8.5 7.5 8.5C8.32843 8.5 9 9.17157 9 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ImageComposition',
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
