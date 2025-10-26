import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 12V4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V12' })
const _hoisted2 = h('path', { 'd': 'M9.5 10H14.5M9.5 6H14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 7L21.7071 9.70711C21.8946 9.89464 22 10.149 22 10.4142V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V10.4142C2 10.149 2.10536 9.89464 2.29289 9.70711L5 7', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M22 10L12.8944 14.5528C12.3314 14.8343 11.6686 14.8343 11.1056 14.5528L2 10', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MailOpen',
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
            _hoisted4
        ])
    }
})
