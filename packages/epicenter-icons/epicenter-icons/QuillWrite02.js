import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.5 3H5C3.34315 3 2 4.34315 2 6V19C2 20.6569 3.34315 22 5 22H18C19.6569 22 21 20.6569 21 19V14', 'stroke-linecap': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 2C12.5 2 11 6.4 11 13C13.1024 13 16.407 12.2221 18.7729 9.95256C19.5427 9.21413 19.3295 7.99712 18.4761 7.35711L18 7C22 6 22 3 22 2Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 17C10.5 13 12.5 10 15 8', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'QuillWrite02',
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
