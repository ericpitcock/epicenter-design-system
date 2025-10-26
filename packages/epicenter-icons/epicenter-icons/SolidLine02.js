import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 3H5C3.34315 3 2 4.34315 2 6V19C2 20.6569 3.34315 22 5 22H18C19.6569 22 21 20.6569 21 19V6C21 4.34315 19.6569 3 18 3Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SolidLine02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
