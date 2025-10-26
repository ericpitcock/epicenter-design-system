import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 12.9998H4.5L8.5 8.5M14 10.985V2L10.1136 6.5M14.0008 11.0002H19.5008L17.5 13.5M10.0008 13.015V22L15.5 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'FlashOff',
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
