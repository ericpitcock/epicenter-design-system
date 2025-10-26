import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 5H7.68121C8.48126 5 9.20434 5.47679 9.5195 6.21216L14.4805 17.7878C14.7957 18.5232 15.5187 19 16.3188 19H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 5H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Option',
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
