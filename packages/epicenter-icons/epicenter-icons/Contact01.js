import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.75 4C3.75 2.89543 4.64543 2 5.75 2H19.75C20.8546 2 21.75 2.89543 21.75 4V20C21.75 21.1046 20.8546 22 19.75 22H5.75C4.64543 22 3.75 21.1046 3.75 20V4Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.75 17H8.75C8.75 14.8522 10.5409 13.1111 12.75 13.1111C14.9591 13.1111 16.75 14.8522 16.75 17Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.7491 8.94444C14.7491 10.0183 13.8536 10.8889 12.7491 10.8889C11.6445 10.8889 10.7491 10.0183 10.7491 8.94444C10.7491 7.87056 11.6445 7 12.7491 7C13.8536 7 14.7491 7.87056 14.7491 8.94444Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.25 6H2.25M5.25 12H2.25M5.25 18H2.25', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Contact01',
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
