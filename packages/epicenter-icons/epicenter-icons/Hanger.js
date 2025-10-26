import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4.12572 15.8668L12 11.5L19.8743 15.8668C20.5697 16.2579 21 16.9937 21 17.7916C21 19.0112 20.0113 20 18.7916 20H5.20841C3.98874 20 3 19.0112 3 17.7916C3 16.9937 3.43034 16.2579 4.12572 15.8668Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 6.90476C10 5.85279 10.8954 5 12 5C13.1046 5 14 5.85279 14 6.90476C14 7.62453 13.5808 8.25106 12.9623 8.57498C12.473 8.83119 12 9 12 9V11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Hanger',
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
