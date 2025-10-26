import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.25 19C20.25 17.3431 18.9069 16 17.25 16C15.5931 16 14.25 17.3431 14.25 19C14.25 20.6569 15.5931 22 17.25 22C18.9069 22 20.25 20.6569 20.25 19Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.75 5L19.0146 16.5843M5.25 5L6.1328 19.1248C6.19868 20.1788 7.07278 21 8.1289 21H14.75', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.25 5L9.56195 4.98083M9.56195 4.98083L11.9521 2.33031C12.1418 2.12003 12.4116 2 12.6948 2H17.9761C18.4318 2 18.8298 2.30803 18.9441 2.74912L19.5225 4.98083M9.56195 4.98083H19.5225M19.5145 4.95361L19.5225 4.98083M19.5225 4.98083L21.25 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Waste',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
