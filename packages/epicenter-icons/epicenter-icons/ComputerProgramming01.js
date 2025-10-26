import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H19C20.6569 18 22 16.6569 22 15V5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 8L18 10L16 12M8 8L6 10L8 12M13 7L11 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 22H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ComputerProgramming01',
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
