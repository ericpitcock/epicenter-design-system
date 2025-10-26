import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 17L15 6.99997L9.00141 3V21L11.002 20M3 6.99997L11.002 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 21L18.8529 18.8529M18.8529 18.8529C18.9675 18.7384 19.0739 18.6158 19.1714 18.486C19.602 17.913 19.8571 17.2006 19.8571 16.4286C19.8571 14.535 18.3221 13 16.4286 13C14.535 13 13 14.535 13 16.4286C13 18.3221 14.535 19.8571 16.4286 19.8571C17.3753 19.8571 18.2325 19.4734 18.8529 18.8529Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BluetoothSearch',
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
