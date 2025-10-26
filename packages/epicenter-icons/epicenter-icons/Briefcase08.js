import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M1.99875 18.9995V8.5C1.99875 7.39543 2.89418 6.5 3.99875 6.5H19.9991C21.1036 6.5 21.9989 7.39519 21.9991 8.4996L22.0012 19C22.0012 20.1046 21.1058 21 20.0012 21H3.99875C2.894 21 1.9985 20.1043 1.99875 18.9995Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.4987 6.5V4.5C15.4987 3.67157 14.8272 3 13.9987 3H9.99875C9.17032 3 8.49875 3.67157 8.49875 4.5V6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.99866 10.5H17.9987', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Briefcase08',
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
