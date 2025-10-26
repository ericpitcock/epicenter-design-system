import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.74277 6.13718L3.5 4L5.5 9L2 13H7.5L10 18.5L12 12.5L18 10.5L13 8L12.5 2L8.74277 6.13718Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 15L16 16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.4391 19.0593C15.8536 18.4739 15.8536 17.5246 16.4391 16.9391C17.0246 16.3536 17.9739 16.3536 18.5593 16.9391L20.5609 18.9407C21.1464 19.5261 21.1464 20.4754 20.5609 21.0609C19.9754 21.6464 19.0261 21.6464 18.4407 21.0609L16.4391 19.0593Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'bevel', 'stroke-miterlimit': '11.4737' })

export default defineComponent({
    name: 'MagicWand03',
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
