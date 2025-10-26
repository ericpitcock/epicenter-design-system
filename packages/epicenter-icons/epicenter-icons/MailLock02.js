import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11 19H4C2.89543 19 2 18.1046 2 17V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 7L10.9923 9.91215C11.615 10.2754 12.385 10.2754 13.0077 9.91215L18 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.5 15.5H15V21H22V15.5H20.5M16.5 15.5V14C16.5 12.8954 17.3954 12 18.5 12C19.6046 12 20.5 12.8954 20.5 14V15.5M16.5 15.5H20.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MailLock02',
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
