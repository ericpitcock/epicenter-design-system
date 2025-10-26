import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 2H18C19.1046 2 20 2.89543 20 4V15.0145L12.9986 22.0015H6C4.89543 22.0015 4 21.1061 4 20.0015V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 15H15C13.8954 15 13 15.8954 13 17V22', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 5L7 2L4 5M7 10V2.60878', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileUpload',
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
