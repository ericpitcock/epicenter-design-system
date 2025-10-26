import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 19H4C2.89543 19 2 18.1046 2 17V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 6L12.8944 10.5528C12.3314 10.8343 11.6686 10.8343 11.1056 10.5528L2 6', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 18.5L18.5 21L21 18.5M18.5 13.5V20.3912', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MailDownload01',
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
