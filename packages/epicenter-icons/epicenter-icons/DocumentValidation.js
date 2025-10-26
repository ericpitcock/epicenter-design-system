import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.5 13H11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.5 17H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 2H4.5C3.39543 2 2.5 2.89543 2.5 4V20C2.5 21.1046 3.39543 22 4.5 22H18.5C19.6046 22 20.5 21.1046 20.5 20V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.5 2C19.2614 2 21.5 4.23858 21.5 7C21.5 9.76142 19.2614 12 16.5 12C13.7386 12 11.5 9.76142 11.5 7C11.5 4.23858 13.7386 2 16.5 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14.5 7L16 8.5L18.5 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DocumentValidation',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
