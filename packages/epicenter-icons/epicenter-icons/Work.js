import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 10C2 8.34315 3.34315 7 5 7H19C20.6569 7 22 8.34315 22 10V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 7V4.5C16 3.67157 15.3284 3 14.5 3H9.5C8.67157 3 8 3.67157 8 4.5V7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 11L6.65197 11.202C10.0851 12.266 13.9149 12.266 17.348 11.202L18 11M12 12V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Work',
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
