import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 4.5C21.278 3.63739 20.4319 3 19.5 3H4.5C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H19.5C20.4319 21 21.278 20.3626 21.5 19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 3V21', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 15L21.5 9L18.0008 7V17L21.5 15L14.5 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TabletConnectedBluetooth',
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
