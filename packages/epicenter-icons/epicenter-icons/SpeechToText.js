import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 17H10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 3.77778V8.22222M5 2V10M2 4.66667V7.33333M11 4.66667V7.33333', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H7C5.34315 22 4 20.6569 4 19V13.5', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'SpeechToText',
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
