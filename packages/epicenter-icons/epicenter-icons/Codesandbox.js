import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 6.5L12 2L3 6.5V17L12 22L21 17V6.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 4L12.4472 5.77638C12.1657 5.91714 11.8343 5.91714 11.5528 5.77638L8 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 11.6154V22M12 11.6154L20.5 7M12 11.6154L3.5 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 12L6.44721 13.7236C6.786 13.893 7 14.2393 7 14.618V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M21 12L17.5528 13.7236C17.214 13.893 17 14.2393 17 14.618V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Codesandbox',
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
