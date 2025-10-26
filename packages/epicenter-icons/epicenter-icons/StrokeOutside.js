import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.1111 14.2222L21 14.2222C21.5523 14.2222 22 14.6699 22 15.2222V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3C2 2.44772 2.44772 2 3 2L8.77778 2C9.33006 2 9.77778 2.44772 9.77778 3V5.88889', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z' })

export default defineComponent({
    name: 'StrokeOutside',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
