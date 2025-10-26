import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 20.5C18.4293 20.5 19.2402 19.993 19.671 19.2404M17.5 20.5C16.5707 20.5 15.7598 19.993 15.329 19.2404M17.5 20.5L17.5 22M17.5 15.5C18.4292 15.5 19.24 16.0069 19.6709 16.7593M17.5 15.5C16.5708 15.5 15.76 16.0069 15.3291 16.7593M17.5 15.5L17.5 14M21 15.9998L19.6709 16.7593M14 19.9998L15.329 19.2404M21 19.9998L19.671 19.2404M14 15.9998L15.3291 16.7593M19.6709 16.7593C19.8803 17.1249 20 17.5485 20 18C20 18.4514 19.8804 18.8749 19.671 19.2404M15.329 19.2404C15.1196 18.8749 15 18.4514 15 18C15 17.5485 15.1197 17.1249 15.3291 16.7593', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16.5 2V6M7.5 2V6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 12V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3 10H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CalendarSetting01',
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
