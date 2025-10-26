import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.4472 17.7764L19 14.5V18.5L12.4472 21.7764C12.1657 21.9172 11.8343 21.9172 11.5528 21.7764L5 18.5V14.5L11.5528 17.7764C11.8343 17.9172 12.1657 17.9172 12.4472 17.7764Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 14.5L15 12.5M5 14.5L9 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.5 5.5C15.5 7.433 13.933 9 12 9C10.067 9 8.5 7.433 8.5 5.5C8.5 3.567 10.067 2 12 2C13.933 2 15.5 3.567 15.5 5.5Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 9V14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Joystick04',
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
