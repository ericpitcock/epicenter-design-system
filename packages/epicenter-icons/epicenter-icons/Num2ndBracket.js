import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 3.00003H19C20.1046 3.00003 21 3.89546 21 5.00003V19C21 20.1046 20.1046 21 19 21H17.5M6.5 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3L6.5 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Num2ndBracket',
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
