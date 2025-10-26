import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 7V4C7 3.44772 7.44772 3 8 3H16C16.5523 3 17 3.44772 17 4L17 7C17 7.55228 16.5523 8 16 8H13L10 10V8H8C7.44772 8 7 7.55228 7 7Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 21H2C2 18.7909 3.79086 17 6 17C8.20914 17 10 18.7909 10 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.99996 13C7.99996 14.1046 7.10453 15 5.99996 15C4.89539 15 3.99996 14.1046 3.99996 13C3.99996 11.8954 4.89539 11 5.99996 11C7.10453 11 7.99996 11.8954 7.99996 13Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M22 21H14C14 18.7909 15.7909 17 18 17C20.2091 17 22 18.7909 22 21Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M20 13C20 14.1046 19.1045 15 18 15C16.8954 15 16 14.1046 16 13C16 11.8954 16.8954 11 18 11C19.1045 11 20 11.8954 20 13Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Conversation',
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
