import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.7353 16.1747V14.7523C15.7353 13.7845 16.5199 13 17.4876 13C18.4554 13 19.24 13.7845 19.24 14.7523V16.1747M14.9999 21.9976H19.9958C20.5481 21.9976 20.9958 21.5499 20.9958 20.9976V17.3931C20.9958 16.8408 20.5481 16.3931 19.9958 16.3931H14.9999C14.4476 16.3931 13.9999 16.8408 13.9999 17.3931V20.9976C13.9999 21.5499 14.4476 21.9976 14.9999 21.9976Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.5 2V6M7.5 2V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 12V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 10H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CalendarLock01',
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
