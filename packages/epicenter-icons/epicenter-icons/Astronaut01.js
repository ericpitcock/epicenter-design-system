import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '11', 'r': '3', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.6573 18C19.6963 16.35 21 13.8273 21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11V20', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5037 17.5L14 13M18.0037 5L14 9', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17 18H3V22H21C21 21.07 21 20.605 20.8978 20.2235C20.6204 19.1883 19.8117 18.3796 18.7765 18.1022C18.395 18 17.93 18 17 18Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Astronaut01',
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
